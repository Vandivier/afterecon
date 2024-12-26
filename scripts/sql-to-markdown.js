const fs = require("fs");
const path = require("path");

// Read SQL file
const sqlContent = fs.readFileSync(
  path.join(__dirname, "../wp-dump.sql"),
  "utf8"
);

// Extract posts from SQL
function extractPosts(sql) {
  const posts = [];
  const insertRegex =
    /INSERT INTO `wp_a6ky8v_posts` \(`ID`.*?\) VALUES\s*(.*?);/gs;
  const matches = sql.matchAll(insertRegex);

  for (const match of matches) {
    const values = match[1].split("),(");

    for (const value of values) {
      // Clean up the value string
      const cleanValue = value.replace(/^\(|\)$/g, "");
      const columns = cleanValue
        .split(",")
        .map((col) => col.trim().replace(/^'|'$/g, ""));

      // Only process published posts
      if (columns[7] === "publish" && columns[20] === "post") {
        posts.push({
          id: columns[0],
          author: columns[1],
          date: new Date(columns[2]),
          content: columns[4].replace(/\\'/g, "'").replace(/\\"/g, '"'),
          title: columns[5].replace(/\\'/g, "'").replace(/\\"/g, '"'),
          slug: columns[11],
        });
      }
    }
  }

  return posts;
}

// Convert post to markdown
function postToMarkdown(post) {
  const date = post.date.toISOString().split("T")[0];
  return `---
title: ${post.title}
date: ${date}
author: John Vandivier
---

${post.content}
`;
}

// Main execution
const posts = extractPosts(sqlContent);

// Create posts directory if it doesn't exist
const postsDir = path.join(__dirname, "../content/posts");
fs.mkdirSync(postsDir, { recursive: true });

// Write each post to a markdown file
posts.forEach((post) => {
  const fileName = `${post.date.toISOString().split("T")[0]}-${post.slug}.md`;
  const filePath = path.join(postsDir, fileName);
  fs.writeFileSync(filePath, postToMarkdown(post));
});

console.log(`Converted ${posts.length} posts to Markdown`);
