import sqlite3 from "sqlite3";
import { open } from "sqlite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

async function initializeDb() {
  // Create a temporary SQLite database
  const db = await open({
    filename: ":memory:",
    driver: sqlite3.Database,
  });

  // Read the SQL dump
  const sqlDump = fs.readFileSync(
    path.join(__dirname, "../wp-dump.sql"),
    "utf8"
  );

  // Split the dump into individual statements
  const statements = sqlDump
    .split(";")
    .filter((stmt) => stmt.trim())
    .map((stmt) => stmt.replace(/^\/\*.*\*\/;/gm, "")); // Remove MySQL comments

  // Execute each statement
  for (const stmt of statements) {
    if (stmt.includes("CREATE TABLE") || stmt.includes("INSERT INTO")) {
      try {
        await db.exec(stmt);
      } catch (error) {
        console.error("Error executing statement:", error);
      }
    }
  }

  return db;
}

async function extractPosts(db) {
  const posts = await db.all(`
    SELECT 
      post_title as title,
      post_date as date,
      post_content as content,
      post_status as status
    FROM wp_a6ky8v_posts 
    WHERE post_type = 'post' 
    AND post_status IN ('publish', 'draft')
    ORDER BY post_date ASC
  `);

  return posts.map((post) => {
    const postDate = new Date(post.date);
    const dateStr = postDate.toISOString().split("T")[0];
    const slug = createSlug(post.title);
    const isDraft = post.status !== "publish";
    const filename = isDraft
      ? `draft-${dateStr}-${slug}.md`
      : `${dateStr}-${slug}.md`;

    return {
      title: post.title,
      date: dateStr,
      author: "John Vandivier",
      content: post.content,
      status: isDraft ? "draft" : "publish",
      filename,
      filepath: `content/${filename}`,
    };
  });
}

async function main() {
  const db = await initializeDb();
  const posts = await extractPosts(db);

  // Save metadata to articles-from-sqlite.json
  const articlesPath = path.join(__dirname, "../articles-from-sqlite.json");
  fs.writeFileSync(articlesPath, JSON.stringify(posts, null, 2));

  console.log(
    `\nTotal: ${posts.length} posts written to articles-from-sqlite.json`
  );
  await db.close();
}

main().catch(console.error);
