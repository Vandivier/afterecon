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

const chunk1 = fs.readFileSync(path.join(__dirname, "../wp-dump.sql"), "utf8");

// Split into all lines
const lines = chunk1.split("\n");

const posts: Post[] = [];
const seenTitles = new Set<string>();

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

  // Skip if we've seen this title before
  if (seenTitles.has(title)) return;
  seenTitles.add(title);

  posts.push({
    postId,
    status: isPublished ? "publish" : "inherit",
    title
  });
});

// Write to JSON file
const outputPath = path.join(__dirname, "../articles-from-analyze-sql.json");
fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));

console.log(`Wrote ${posts.length} unique posts to articles-from-analyze-sql.json`); 