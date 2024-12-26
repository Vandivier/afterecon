import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsDirectory = path.join(__dirname, "..", "content");

export interface Post {
  title: string;
  date: string;
  author: string;
  status: string;
  content: string;
  slug: string;
}

// This function will be used at build time to generate static content
export async function generateStaticPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.md'));

  const allPosts = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.slice(0, -3);
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml, { sanitize: false })
      .process(matterResult.content);

    return {
      slug,
      content: processedContent.toString(),
      ...(matterResult.data as Omit<Post, "slug" | "content">),
    };
  }));

  const outputPath = path.join(process.cwd(), 'articles.json');
  fs.writeFileSync(
    outputPath, 
    JSON.stringify(allPosts, null, 2)
  );

  return allPosts;
}

// This function will read from the generated JSON at runtime
export function getSortedPosts(): Post[] {
  const postsPath = path.join(process.cwd(), 'articles.json');
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  
  return posts.sort((a: Post, b: Post) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}

export function getAllPostSlugs() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function getPostData(slug: string): Promise<Post> {
  const posts = getSortedPosts();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
} 