import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCHEMA = `CREATE TABLE wp_a6ky8v_posts (
  ID bigint(20) UNSIGNED NOT NULL,
  post_author bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  post_date datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_date_gmt datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_content longtext NOT NULL,
  post_title text NOT NULL,
  post_excerpt text NOT NULL,
  post_status varchar(20) NOT NULL DEFAULT 'publish',
  comment_status varchar(20) NOT NULL DEFAULT 'open',
  ping_status varchar(20) NOT NULL DEFAULT 'open',
  post_password varchar(255) NOT NULL DEFAULT '',
  post_name varchar(200) NOT NULL DEFAULT '',
  to_ping text NOT NULL,
  pinged text NOT NULL,
  post_modified datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_modified_gmt datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_content_filtered longtext NOT NULL,
  post_parent bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  guid varchar(255) NOT NULL DEFAULT '',
  menu_order int(11) NOT NULL DEFAULT 0,
  post_type varchar(20) NOT NULL DEFAULT 'post',
  post_mime_type varchar(100) NOT NULL DEFAULT '',
  comment_count bigint(20) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const INSERT_STATEMENT_START = `INSERT INTO \`wp_a6ky8v_posts\` (\`ID\`, \`post_author\`, \`post_date\`, \`post_date_gmt\`, \`post_content\`, \`post_title\`, \`post_excerpt\`, \`post_status\`, \`comment_status\`, \`ping_status\`, \`post_password\`, \`post_name\`, \`to_ping\`, \`pinged\`, \`post_modified\`, \`post_modified_gmt\`, \`post_content_filtered\`, \`post_parent\`, \`guid\`, \`menu_order\`, \`post_type\`, \`post_mime_type\`, \`comment_count\`) VALUES`;

async function main() {
  // Create chunks directory if it doesn't exist
  const chunksDir = path.join(__dirname, "../wp-dump-chunks");
  if (!fs.existsSync(chunksDir)) {
    fs.mkdirSync(chunksDir);
  }

  // Read the SQL dump
  const sqlDump = fs.readFileSync(
    path.join(__dirname, "../wp-dump.sql"),
    "utf8"
  );

  // Split on the INSERT statement
  const chunks = sqlDump.split(INSERT_STATEMENT_START);

  // Remove the first chunk (everything before first INSERT)
  chunks.shift();

  console.log(`Found ${chunks.length} chunks`);

  // Process each chunk
  chunks.forEach((chunk, index) => {
    // Add back the INSERT statement start that was removed in the split
    const completeChunk = `${SCHEMA}\n\n${INSERT_STATEMENT_START}${chunk}`;
    
    // Write to file
    const chunkPath = path.join(chunksDir, `chunk-${index + 1}.txt`);
    fs.writeFileSync(chunkPath, completeChunk);
  });

  console.log(`Created ${chunks.length} chunk files in wp-dump-chunks/`);
}

main().catch(console.error); 