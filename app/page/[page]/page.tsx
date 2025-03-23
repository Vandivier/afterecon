import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPosts();
  const totalPages = Math.ceil(posts.length / 10);

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }));
}

function getPaginationRange(currentPage: number, totalPages: number) {
  const delta = 1; // Number of pages to show on either side of current page
  const range: (number | string)[] = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // First page
      i === totalPages || // Last page
      (i >= currentPage - delta && i <= currentPage + delta) // Pages around current
    ) {
      range.push(i);
    } else if (i === 2 && currentPage - delta > 2) {
      range.push('...');
    } else if (i === totalPages - 1 && currentPage + delta < totalPages - 1) {
      range.push('...');
    }
  }

  return range;
}

export default function Page({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page);
  const posts = getSortedPosts();
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
        <h1 className="mb-12 text-4xl font-bold">Recent Posts</h1>
        <div className="space-y-10">
          {currentPosts.map((post) => (
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

        {/* Updated Pagination Controls */}
        <nav className="mt-10 flex justify-center" aria-label="Pagination">
          <ul className="flex items-center gap-1">
            <li>
              <Link
                href={pageNumber > 2 ? `/page/${pageNumber - 1}` : '/'}
                className="flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Previous page"
              >
                ←
              </Link>
            </li>

            {getPaginationRange(pageNumber, totalPages).map((page, index) => (
              <li key={index}>
                {typeof page === 'number' ? (
                  <Link
                    href={page === 1 ? '/' : `/page/${page}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ${
                      page === pageNumber
                        ? 'bg-sky-600 text-white dark:bg-sky-500'
                        : 'border text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {page}
                  </Link>
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                    {page}
                  </span>
                )}
              </li>
            ))}

            <li>
              <Link
                href={`/page/${pageNumber + 1}`}
                className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 ${
                  pageNumber === totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }`}
                aria-label="Next page"
              >
                →
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
