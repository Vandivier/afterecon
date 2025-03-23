import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'content');

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
  try {
    // Create posts directory if it doesn't exist
    const fileNames = readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
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

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getAllPostSlugs() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function getPostData(slug: string) {
  // Read markdown file as string
  const fullPath = join(postsDirectory, `${slug}.md`);
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
  const posts = getSortedPosts();
  // Add any additional static generation logic here
  return posts;
}
