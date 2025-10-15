// FILE: src/app/page.tsx

import Link from 'next/link';
import { MessageSquare, Zap, Code } from 'lucide-react';

const FeatureItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default function Home() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Local Lead Bot',
    description:
      'An AI chatbot that helps local businesses capture leads, schedule appointments, and automate follow-ups 24/7.',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free trial available.',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Turn Your Website into an Automated <br className="hidden md:block" />
            <span className="text-blue-600">Lead-Generating Machine</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Local Lead Bot helps your business collect leads, book appointments, and
            follow up automatically — so you never miss another opportunity.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="border border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Everything You Need to Automate Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem icon={<MessageSquare className="w-10 h-10" />} title="Smart Chatbot">
              Capture leads 24/7 with an AI chatbot that talks like a human, answers questions,
              and books appointments directly to your calendar.
            </FeatureItem>

            <FeatureItem icon={<Zap className="w-10 h-10" />} title="Automated Follow-Ups">
              Send instant SMS and email responses to new leads — no manual chasing or delays.
              Stay top of mind while you&apos;re busy running your business.
            </FeatureItem>

            <FeatureItem icon={<Code className="w-10 h-10" />} title="Easy Integration">
              Add Local Lead Bot to your existing website in minutes. No coding required.
              Works with WordPress, Wix, or custom sites.
            </FeatureItem>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Missing Leads?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Let your website work for you, even when you&apos;re not online.
            Start your free trial today.
          </p>
          <Link
            href="/get-started"
            className="bg-white text-blue-600 font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </>
  );
}
