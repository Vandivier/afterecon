import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Post {
  title: string;
  date: string;
  author: string;
  content: string;
  status: string;
  filename: string;
  filepath: string;
}

function createMarkdownContent(post: Post): string {
  return `---
title: ${post.title}
date: ${post.date}
author: ${post.author}
status: ${post.status}
---

${post.content}`;
}

// Read the articles.json file
const articlesPath = path.join(__dirname, "../articles.json");
const articles: Post[] = JSON.parse(fs.readFileSync(articlesPath, "utf8"));

// Create markdown files
articles.forEach((post) => {
  const markdownContent = createMarkdownContent(post);
  const outputPath = path.join(__dirname, "..", post.filepath);
  fs.writeFileSync(outputPath, markdownContent);
  console.log(`Created: ${post.filepath}`);
});

console.log(`\nTotal: ${articles.length} markdown files created`); 