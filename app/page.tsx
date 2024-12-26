import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AfterEcon Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="prose dark:prose-invert">
            <h2 className="mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {post.title}
              </Link>
            </h2>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              <time>{post.date}</time> • {post.author}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
