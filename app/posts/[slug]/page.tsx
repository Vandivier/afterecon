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
  console.log("Generating paths for:", paths.length, "posts");
  return paths;
}

export default async function Post({ params }: Props) {
  const post = await getPostData(params.slug);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <article className="prose dark:prose-invert lg:prose-lg">
          <h1 className="mb-4 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-8">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>{" "}
            • {post.author}
          </div>
          <div
            className="mt-8 prose-headings:text-gray-900 prose-headings:dark:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
