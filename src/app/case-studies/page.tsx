// FILE: src/app/case-studies/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies & Customer Success Stories',
  description: 'See how real local businesses use Local Lead Bot to increase their leads, save time, and grow their revenue. Read our customer success stories.',
};

export default function CaseStudiesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies & Customer Success Stories",
    "description": "A collection of case studies showing the success of businesses using Local Lead Bot.",
    "url": "https://www.localleadbot.com/case-studies",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Real Results for Real Businesses
          </h1>
          {/* CORRECTED LINE */}
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            {"Don't just take our word for it. See how we're helping businesses just like yours to thrive in their local markets."}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="h-12 mb-6 flex items-center">
                  <span className="font-bold text-gray-400 text-2xl">{study.client}</span>
                </div>
                {/* CORRECTED LINE */}
                <blockquote className="text-lg font-semibold text-gray-800 italic">
                  {`"${study.quote}"`}
                </blockquote>
                <div className="mt-6">
                  <p className="text-blue-600 font-semibold group-hover:underline">
                    Read the full story &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of other local businesses who are automating their growth.
          </p>
          <Link href="/get-started" className="bg-blue-600 text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}