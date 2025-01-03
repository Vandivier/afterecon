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

const chunk1 = fs.readFileSync(path.join(__dirname, "../wp-dump.sql"), "utf8");

// Split into all lines
const lines = chunk1.split("\n");

const posts: Post[] = [];
const titleToPost = new Map<string, Post>();

lines.forEach(line => {
  // Extract post ID
  const postIdMatch = line.match(/\((\d+),/);
  if (!postIdMatch) return;
  const postId = parseInt(postIdMatch[1]);

  // Check status
  const isPublished = line.includes("', 'publish', '");
  const isInherited = line.includes("', 'inherit', '");

  if (!isPublished && !isInherited) return;

  // Extract title
  const beforeStatus = line.split(isPublished ? "', 'publish', '" : "', 'inherit', '")[0];
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
    postDate
  };

  // Only keep most recent version of each title
  const existingPost = titleToPost.get(title);
  if (!existingPost || postDate > existingPost.postDate) {
    titleToPost.set(title, post);
  }
});

// Convert map to array
const uniquePosts = Array.from(titleToPost.values());

// Write to JSON file
const outputPath = path.join(__dirname, "../articles-from-analyze-sql.json");
fs.writeFileSync(outputPath, JSON.stringify(uniquePosts, null, 2));

// Compare with legacy articles.json
const legacyPath = path.join(__dirname, "../articles.json");
const legacyPosts: LegacyPost[] = JSON.parse(fs.readFileSync(legacyPath, "utf8"));

const newTitles = new Set(uniquePosts.map(p => p.title));
const missingTitles = legacyPosts.filter(p => !newTitles.has(p.title));

console.log(`\nFound ${missingTitles.length} titles in legacy articles.json that are missing from new analysis:`);
missingTitles.forEach(p => console.log(`- ${p.title}`));

console.log(`\nWrote ${uniquePosts.length} unique posts to articles-from-analyze-sql.json`); 