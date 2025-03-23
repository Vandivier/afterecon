import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'content');

export interface Post {
  date: string;
  title: string;
  author: string;
  slug: string;
}

export interface PostWithContent extends Post {
  content: string;
}

export function getSortedPosts(): Post[] {
  // Read from content directory instead of SQLite
  const fileNames = readdirSync(contentDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = join(contentDirectory, fileName);
      const fileContents = readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as {
          date: string;
          title: string;
          author: string;
        }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function getPostData(slug: string) {
  // Read markdown file as string
  const fullPath = join(contentDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
}

export async function generateStaticPosts() {
  return getSortedPosts();
}
