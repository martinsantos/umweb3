import Head from 'next/head';
import { getPosts } from '../lib/api';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Ultima Milla</title>
        <meta name="description" content="Ultima Milla Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-4xl font-bold">Bienvenidos a Ultima Milla</h1>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border-b border-gray-300">
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
