import Head from "next/head";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { getSortedPostsData } from "../lib/posts";
import { format } from "date-fns";

export default function Home({ posts }) {
  return (
    <div className="min-h-screen py-8 px-4">
      <Head>
        <title>AfterEcon</title>
        <meta
          name="description"
          content="John Vandivier's blog on economics and more"
        />
      </Head>

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

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
