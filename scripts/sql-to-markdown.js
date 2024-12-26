const fs = require("fs");
const path = require("path");

// Read SQL file
const sqlContent = fs.readFileSync(
  path.join(__dirname, "../wp-dump.sql"),
  "utf8"
);

console.log("SQL file loaded, length:", sqlContent.length);

function extractPosts(sql) {
  const posts = [];
  const lines = sql.split("\n");
  let inInsertBlock = false;
  let currentInsert = "";
  let processedCount = 0;

  console.log("Total lines:", lines.length);

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
        processedCount++;

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

              if (title && date) {
                posts.push({
                  title,
                  date: new Date(date),
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
posts.sort((a, b) => a.date - b.date);

// Format for output
const output = posts
  .map((post) => `${post.date.toISOString().split("T")[0]} - ${post.title}`)
  .join("\n");

// Write to file
const outputPath = path.join(__dirname, "../article-titles.txt");
fs.writeFileSync(outputPath, output);

console.log(`\nFound ${posts.length} posts. Written to article-titles.txt`);
console.log("\nFirst few posts:");
console.log(
  posts
    .slice(0, 5)
    .map((p) => `${p.date.toISOString().split("T")[0]} - ${p.title}`)
    .join("\n")
);
