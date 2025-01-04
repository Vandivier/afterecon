import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Post {
  title: string;
  postDate: string;
  content: string;
  status: string;
  filename: string;
}

function createMarkdownContent(post: Post): string {
  return `---
title: ${post.title}
date: ${post.postDate}
author: John Vandivier
---

${post.content}`;
}

// Read the articles.json file
const articlesPath = path.join(__dirname, "../articles-from-analyze-sql.json");
const articles: Post[] = JSON.parse(fs.readFileSync(articlesPath, "utf8"));

// Create markdown files
articles.forEach((post) => {
  const markdownContent = createMarkdownContent(post);
  const outputPath = path.join(__dirname, "..", "content", post.filename);
  fs.writeFileSync(outputPath, markdownContent);
  console.log(`Created: ${post.filename}`);
});

console.log(`\nTotal: ${articles.length} markdown files created`);
