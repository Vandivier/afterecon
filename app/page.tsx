import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { getSortedPostsData } from "@/lib/posts";
import { format } from "date-fns";

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen py-8 px-4">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">AfterEcon</h1>
        <ThemeToggle />
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </h2>
              </Link>
              <time className="text-gray-600 dark:text-gray-400">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
