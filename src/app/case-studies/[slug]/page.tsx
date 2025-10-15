// FILE: src/app/case-studies/[slug]/page.tsx

import { caseStudies } from '@/data/caseStudies';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find((study) => study.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: `Case Study: ${study.client}`,
    description: study.quote,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((study) => study.slug === params.slug);

  if (!study) {
    notFound();
  }
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Case Study: How ${study.client} Achieved Success with Local Lead Bot`,
    "description": study.quote,
    "author": { "@type": "Organization", "name": "Local Lead Bot" },
    "publisher": {
      "@type": "Organization",
      "name": "Local Lead Bot",
      "logo": { "@type": "ImageObject", "url": "https://www.localleadbot.com/logo.png" }
    },
    "datePublished": "2025-10-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-white">
        <header className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <p className="font-semibold text-blue-600">{study.industry}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
              {study.client}
            </h1>
            {/* CORRECTED LINE */}
            <p className="text-2xl text-gray-700 mt-4 italic max-w-4xl mx-auto">
              {`"${study.quote}"`}
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">The Challenge</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{study.challenge}</p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">The Solution</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{study.solution}</p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">The Results</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{study.results}</p>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 sticky top-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">At a Glance</h3>
                <ul className="space-y-6">
                  {study.keyMetrics.map((item) => (
                    <li key={item.label} className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-3xl font-extrabold text-gray-900">{item.metric}</p>
                        <p className="text-gray-600">{item.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </main>
        
        <section className="bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Results Like These?</h2>
            <Link href="/get-started" className="mt-6 inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-all">
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}