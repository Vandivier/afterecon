import Link from "next/link";
import { format } from "date-fns";
import { getSortedPosts } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
            Recent Posts
          </h1>
          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="prose dark:prose-invert max-w-none"
              >
                <h2 className="mb-2 mt-0">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-gray-900 dark:text-gray-100 hover:text-sky-600 dark:hover:text-sky-400 no-underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </time>{" "}
                  • {post.author}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
