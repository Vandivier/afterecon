const fs = require("fs");
const path = require("path");

// Read articles.json
const articlesPath = path.join(__dirname, "../articles.json");
const contentDir = path.join(__dirname, "../content");

// Create content directory if it doesn't exist
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

// Read and parse articles.json
const articles = JSON.parse(fs.readFileSync(articlesPath, "utf8"));

// Convert each article to markdown and save
articles.forEach((article) => {
  const { title, date, author, content, status, filename } = article;

  // Create markdown frontmatter
  const markdown = `---
title: ${JSON.stringify(title)}
date: ${date}
author: ${author}
status: ${status}
---

${content}`;

  // Write markdown file
  const filePath = path.join(contentDir, filename);
  fs.writeFileSync(filePath, markdown);

  console.log(`Created: ${filename}`);
});

console.log(`\nTotal: ${articles.length} markdown files created`);
