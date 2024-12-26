const fs = require("fs");
const path = require("path");

// Read SQL file
const sqlContent = fs.readFileSync(
  path.join(__dirname, "../wp-dump.sql"),
  "utf8"
);

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

function normalizeQuotes(text) {
  return text
    .replace(/[""]/g, '"') // Replace fancy double quotes
    .replace(/['']/g, "'"); // Replace fancy single quotes
}

function extractPosts(sql) {
  const posts = [];
  const lines = sql.split("\n");
  let inInsertBlock = false;
  let currentInsert = "";

  for (let line of lines) {
    line = line.trim();

    // Start of an INSERT block
    if (line.startsWith("INSERT INTO `wp_a6ky8v_posts`")) {
      inInsertBlock = true;
      currentInsert = line;
      continue;
    }

    // Collecting lines in the current INSERT block
    if (inInsertBlock) {
      currentInsert += " " + line;

      // End of INSERT block
      if (line.endsWith(";")) {
        inInsertBlock = false;

        // Extract values from the complete INSERT statement
        const valuesMatch = currentInsert.match(/VALUES\s*(\(.*\))/);
        if (valuesMatch) {
          // Split multiple value sets
          const valuesSets = valuesMatch[1].split("),(");

          for (let valueSet of valuesSets) {
            // Clean up the first and last value sets
            valueSet = valueSet.replace(/^\(|\)$/g, "");

            // Split into columns, handling quoted values properly
            const values = [];
            let currentValue = "";
            let inQuotes = false;

            for (let char of valueSet) {
              if (
                char === "'" &&
                (currentValue.length === 0 ||
                  currentValue[currentValue.length - 1] !== "\\")
              ) {
                inQuotes = !inQuotes;
                currentValue += char;
              } else if (char === "," && !inQuotes) {
                values.push(currentValue.trim());
                currentValue = "";
              } else {
                currentValue += char;
              }
            }
            if (currentValue) {
              values.push(currentValue.trim());
            }

            // Check if it's a published post
            const status = values[7]?.replace(/^'|'$/g, "").trim();
            const type = values[20]?.replace(/^'|'$/g, "").trim();

            if (status === "publish" && type === "post") {
              const title = values[5]
                ?.replace(/^'|'$/g, "")
                .replace(/\\'/g, "'")
                .trim();
              const date = values[2]?.replace(/^'|'$/g, "").trim();
              const content = values[4]
                ?.replace(/^'|'$/g, "")
                .replace(/\\'/g, "'")
                .trim();
              const authorId = values[1]?.replace(/^'|'$/g, "").trim();

              if (title && date && content) {
                const postDate = new Date(date);
                const dateStr = postDate.toISOString().split("T")[0];
                const slug = createSlug(title);
                const filename = `${dateStr}-${slug}.md`;

                console.log(`Found: ${filename}`);

                posts.push({
                  title: normalizeQuotes(title),
                  date: dateStr,
                  author: "John Vandivier", // Hardcoded since all posts are by the same author
                  content: normalizeQuotes(content),
                  filename,
                  filepath: `content/${filename}`,
                });
              }
            }
          }
        }
      }
    }
  }

  return posts;
}

// Main execution
const posts = extractPosts(sqlContent);

// Sort posts by date
posts.sort((a, b) => a.date.localeCompare(b.date));

// Create content directory if it doesn't exist
const contentDir = path.join(__dirname, "../content");
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

// Save metadata to articles.json
const articlesPath = path.join(__dirname, "../articles.json");
fs.writeFileSync(articlesPath, JSON.stringify(posts, null, 2));

console.log(`\nTotal: ${posts.length} posts written to articles.json`);
