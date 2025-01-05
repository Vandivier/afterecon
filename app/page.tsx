import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPosts } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
        <h1 className="mb-12 text-4xl font-bold">Recent Posts</h1>
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="prose max-w-none dark:prose-invert"
            >
              <h2 className="mb-2 mt-0">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-gray-900 no-underline hover:text-sky-600 dark:text-gray-100 dark:hover:text-sky-400"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>{' '}
                • {post.author}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
