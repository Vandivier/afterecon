const fs = require("fs");
const path = require("path");

// Read SQL file
const sqlContent = fs.readFileSync(
  path.join(__dirname, "../wp-dump.sql"),
  "utf8"
);

console.log("SQL file loaded, length:", sqlContent.length);

function extractTitles(sql) {
  const titles = [];
  const lines = sql.split("\n");
  let inInsertBlock = false;
  let currentInsert = "";
  let processedCount = 0;

  console.log("Total lines:", lines.length);

  for (let line of lines) {
    line = line.trim();

    // Start of an INSERT block
    if (line.startsWith("INSERT INTO `wp_a6ky8v_posts`")) {
      console.log("\nFound INSERT block:", line.substring(0, 100) + "...");
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
        console.log("\nProcessing complete INSERT block #", processedCount);

        // Exit after 20 blocks
        if (processedCount >= 20) {
          console.log("Exiting after 20 blocks for debugging");
          return titles;
        }

        // Extract values from the complete INSERT statement
        const valuesMatch = currentInsert.match(/VALUES\s*(\(.*\))/);
        if (valuesMatch) {
          console.log("Found VALUES section");
          // Split multiple value sets
          const valuesSets = valuesMatch[1].split("),(");
          console.log("Number of value sets:", valuesSets.length);

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

            console.log("Status:", status, "Type:", type);

            if (status === "publish" && type === "post") {
              // Extract title (6th column, index 5)
              const title = values[5]
                ?.replace(/^'|'$/g, "") // Remove outer quotes
                .replace(/\\'/g, "'") // Unescape quotes
                .trim();

              if (title) {
                console.log("Found title:", title);
                titles.push(title);
              }
            }
          }
        }
      }
    }
  }

  return titles;
}

// Main execution
const titles = extractTitles(sqlContent);

console.log("\nAll titles found:", titles);

// Write titles to a file
const outputPath = path.join(__dirname, "../article-titles.txt");
fs.writeFileSync(outputPath, titles.join("\n"));

console.log(`\nFound ${titles.length} titles. Written to article-titles.txt`);
