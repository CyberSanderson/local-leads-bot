// FILE: src/app/blog/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Make sure Image is imported
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Blog - Local Marketing & Lead Generation Tips',
  description: 'The official blog for Local Lead Bot. Find expert articles, tips, and strategies on local marketing, automated lead generation, and small business growth.',
};

const featuredPost = posts[0];
const otherPosts = posts.slice(1);

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Local Lead Bot Blog",
    "description": "Expert articles on local marketing, lead generation, and small business growth.",
    "url": "https://www.localleadbot.com/blog",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">The Local Lead Bot Blog</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Insights on local marketing, lead generation, and small business growth.
            </p>
          </div>

          {/* Featured Post */}
          <article className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-80 relative rounded-lg overflow-hidden">
                   <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                   />
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase">{featuredPost.category}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-700 transition-colors">{featuredPost.title}</h2>
                  <p className="text-gray-600 mt-4">{featuredPost.excerpt}</p>
                  <div className="text-sm text-gray-500 mt-4">
                    By {featuredPost.author} on {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
              </div>
            </Link>
          </article>
          
          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="w-full h-48 relative">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-600 font-semibold text-sm uppercase">{post.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                    <div className="text-sm text-gray-500 mt-3">
                      By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}