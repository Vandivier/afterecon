import { getAllPostSlugs, getPostData } from "@/lib/posts";
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
    <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="text-gray-600 dark:text-gray-400 mb-8">
        <time>{post.date}</time> • {post.author}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
