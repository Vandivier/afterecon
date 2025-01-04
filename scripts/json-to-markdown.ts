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
  filename?: string;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
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
  let filename = post.filename;
  if (!filename) {
    const postDate = new Date(post.postDate);
    const dateStr = postDate.toISOString().split("T")[0];
    const slug = createSlug(post.title);
    filename = `${dateStr}-${slug}.md`;
  }

  const outputPath = path.join(__dirname, "..", "content", filename);
  fs.writeFileSync(outputPath, markdownContent);
  console.log(`Created: ${filename}`);
});

console.log(`\nTotal: ${articles.length} markdown files created`);
