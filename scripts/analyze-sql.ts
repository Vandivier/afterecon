import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Post {
  postId: number;
  title: string;
  status: string;
}

const chunk1 = fs.readFileSync(path.join(__dirname, "../wp-dump-chunks/chunk-1.txt"), "utf8");

// Split into all lines
const lines = chunk1.split("\n");

const posts: Post[] = [];

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
  const titleParts = beforeStatus.split(",");
  const title = titleParts[titleParts.length - 2]?.trim().replace(/^'|'$/g, "");

  posts.push({
    postId,
    status: isPublished ? "publish" : "inherit",
    title
  });
});

// Write to JSON file
const outputPath = path.join(__dirname, "../articles-from-analyze-sql.json");
fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));

console.log(`Wrote ${posts.length} posts to articles-from-analyze-sql.json`); 