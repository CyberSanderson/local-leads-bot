// FILE: src/app/blog/[slug]/page.tsx

import { posts } from '@/data/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// ✅ Define Props first
interface Props {
  params: { slug: string };
}

// ✅ Make generateMetadata async
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// ✅ Mark this async to match Next.js 15 PageProps type expectations
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.localleadbot.com${post.imageUrl}`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Local Lead Bot',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.localleadbot.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      <article className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">{post.title}</h1>
            <p className="text-gray-500 mt-4">
              By {post.author} on{' '}
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <figure className="max-w-5xl mx-auto mb-12">
            <Image
              src="/images/placeholder-image.jpg"
              alt={post.title}
              width={1200}
              height={628}
              className="rounded-2xl w-full h-auto"
            />
          </figure>

          <div className="prose lg:prose-xl max-w-4xl mx-auto">
            <p>{post.content}</p>
          </div>
        </div>
      </article>
    </>
  );
}

