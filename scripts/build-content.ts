import { generateStaticPosts } from '../lib/posts.js';

async function build() {
  console.log('Generating static posts...');
  const posts = await generateStaticPosts();
  console.log(`Generated ${posts.length} posts`);
}

build().catch(console.error); 