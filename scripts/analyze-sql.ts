import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Post {
  postId: number;
  title: string;
  status: string;
  postDate: string;
  content?: string;
  originalPostDate?: string;
  ignore?: boolean | "quote" | "obsolete";
}

interface LegacyPost {
  title: string;
  date: string;
  author: string;
  content: string;
  status: string;
  filename: string;
  filepath: string;
}

// Read existing articles if file exists
let existingPosts: Post[] = [];
const existingPath = path.join(__dirname, "../articles-from-analyze-sql.json");
try {
  existingPosts = JSON.parse(fs.readFileSync(existingPath, "utf8"));
  console.log(
    `Read ${existingPosts.length} existing posts from articles-from-analyze-sql.json`
  );
} catch (e) {
  console.log(
    "No existing articles-from-analyze-sql.json found, starting fresh"
  );
}

// Create map of existing posts by title for easy lookup
const existingPostsByTitle = new Map<string, Post>();
existingPosts.forEach((post) => {
  existingPostsByTitle.set(post.title, post);
});

const existingPostsById = new Map<number, Post>();
existingPosts.forEach((post) => {
  if (post.postId) {
    existingPostsById.set(post.postId, post);
  }
});

const chunk1 = fs.readFileSync(path.join(__dirname, "../wp-dump.sql"), "utf8");

// Split into all lines
const lines = chunk1.split("\n");
const titleToPost = new Map<string, Post>();

lines.forEach((line) => {
  // Extract post ID
  const postIdMatch = line.match(/\((\d+),/);
  if (!postIdMatch) return;
  const postId = parseInt(postIdMatch[1]);

  // Check status
  const isPublished = line.includes("', 'publish', '");
  const isInherited = line.includes("', 'inherit', '");

  if (!isPublished && !isInherited) return;

  // Extract title
  const beforeStatus = line.split(
    isPublished ? "', 'publish', '" : "', 'inherit', '"
  )[0];
  const titleParts = beforeStatus.split("', '");
  const title = titleParts[titleParts.length - 2]?.trim().replace(/^'|'$/g, "");

  // Extract post date (third element when splitting by comma)
  const parts = line.split(",");
  if (parts.length < 3) return;
  const postDate = parts[2].trim().replace(/^'|'$/g, "");

  const post = {
    postId,
    status: isPublished ? "publish" : "inherit",
    title,
    postDate,
    // Preserve originalPostDate if it exists in previous data
    ...(existingPostsByTitle.get(title)?.originalPostDate
      ? { originalPostDate: existingPostsByTitle.get(title)!.originalPostDate }
      : {}),
  };

  // Only keep most recent version of each title
  const existingPost = titleToPost.get(title);
  if (!existingPost || postDate > existingPost.postDate) {
    titleToPost.set(title, post);
  }
});

// Compare with legacy articles.json
const legacyPath = path.join(__dirname, "../articles.json");
const legacyPosts: LegacyPost[] = JSON.parse(
  fs.readFileSync(legacyPath, "utf8")
);

const newTitles = new Set(Array.from(titleToPost.values()).map((p) => p.title));
const missingTitles = legacyPosts.filter((p) => !newTitles.has(p.title));

// Merge missing legacy posts into uniquePosts
missingTitles.forEach((legacyPost) => {
  const post: Post = {
    postId: 0, // No postId available from legacy posts
    title: legacyPost.title,
    status: legacyPost.status,
    postDate: legacyPost.date,
    content: legacyPost.content,
    // Check if we have existing data for this title
    ...(existingPostsByTitle.get(legacyPost.title)
      ? {
          originalPostDate: existingPostsByTitle.get(legacyPost.title)!
            .originalPostDate,
          ignore: existingPostsByTitle.get(legacyPost.title)!.ignore,
        }
      : {}),
  };

  titleToPost.set(legacyPost.title, post);
});

console.log(
  `\nFound ${missingTitles.length} titles in the alternately-parsed articles.json that were merged from legacy analysis:`
);
missingTitles.forEach((p) => console.log(`- ${p.title}`));

console.log("\nMerging posts...");

console.log("\nExtracting content for posts...");

// Extract content for each post
const postsWithContent = Array.from(titleToPost.values()).map((post) => {
  // Find the SQL insert line containing this post's content
  const postLine = lines.find((line) => {
    const postIdMatch = line.match(/\((\d+),/);
    return postIdMatch && parseInt(postIdMatch[1]) === post.postId;
  });

  if (!postLine) {
    return post;
  }

  // Extract content between post_content field quotes
  // Split on post_content field which comes after postId and author
  const contentParts = postLine.split("', '");
  if (contentParts.length >= 3) {
    // The content should be the third field after splitting on "', '"
    const content = contentParts[2]
      .replace(/\\'/g, "'") // Unescape single quotes
      .replace(/\\n/g, "\n") // Convert \n to actual newlines
      .replace(/\\r/g, "\r") // Convert \r to actual carriage returns
      .trim();

    return {
      ...post,
      content,
    };
  }

  return post;
});

// Update titleToPost with content-enhanced posts
postsWithContent.forEach((post) => {
  titleToPost.set(post.title, post);
});

// When writing final output, merge with existing data
const mergedPosts = Array.from(titleToPost.values()).map((post) => {
  const existingPostById = existingPostsById.get(post.postId);
  const existingPostByTitle = existingPostsByTitle.get(post.title);

  if (existingPostById) {
    // If we have a matching postId, keep existing title but update content
    return {
      ...existingPostById,
      ...post,
      title: existingPostById.title, // Keep existing title
      originalPostDate: existingPostById.originalPostDate,
      ignore: existingPostById.ignore,
    };
  } else if (existingPostByTitle) {
    // Fall back to title matching if no postId match
    return {
      ...existingPostByTitle,
      ...post,
      originalPostDate: existingPostByTitle.originalPostDate,
      ignore: existingPostByTitle.ignore,
    };
  }
  return post;
});

// Write merged posts back to original file
fs.writeFileSync(existingPath, JSON.stringify(mergedPosts, null, 2));

console.log(
  `\nWrote ${mergedPosts.length} posts to articles-from-analyze-sql.json`
);
console.log(
  `Preserved ignore field for ${
    mergedPosts.filter((p) => p.ignore !== undefined).length
  } posts`
);
console.log(
  `Added content for ${mergedPosts.filter((p) => p.content).length} posts`
);

const postsWithoutContent = mergedPosts.filter((p) => !p.content && !p.ignore);

if (postsWithoutContent.length > 0) {
  console.log(
    `\nWARNING: ${postsWithoutContent.length} posts have no content and are not ignored:`
  );
  postsWithoutContent.forEach((p) => console.log(`- [${p.postId}] ${p.title}`));
}
