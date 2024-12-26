import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { format } from "date-fns";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
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
  const post = await getPostData(params.slug);

  return (
    <article className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="prose dark:prose-invert lg:prose-lg mx-auto">
          <h1 className="mb-4 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-8">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>{" "}
            • {post.author}
          </div>
          {post.content ? (
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-red-600">No content available for this post.</p>
          )}
        </div>
      </div>
    </article>
  );
}
