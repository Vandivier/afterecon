import { getAllPostSlugs, getPostData, PostWithContent } from '@/lib/posts';
import { format } from 'date-fns';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

interface Post {
  date: string;
  title: string;
  author: string;
  slug: string;
  content?: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return {
    title: post.title,
    description: `${post.title} - by ${post.author}`,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function Post({ params }: Props) {
  const post = (await getPostData(params.slug)) as PostWithContent;

  return (
    <article className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="prose mx-auto dark:prose-invert lg:prose-lg">
          <h1 className="mb-4 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>{' '}
            • {post.author}
          </div>
          {post.content ? (
            <div
              className="prose max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </article>
  );
}
