import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function generateSearchIndex() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'));

  const searchIndex = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = file.replace('.md', '');

    return {
      title: data.title,
      date: data.date,
      slug: slug,
    };
  });

  // Sort by date descending
  searchIndex.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  const outputPath = path.join(process.cwd(), 'public/search-index.json');
  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));

  console.log(`Search index generated with ${searchIndex.length} posts.`);
}

generateSearchIndex().catch(console.error);
