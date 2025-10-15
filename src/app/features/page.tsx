// FILE: src/app/features/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Wrench, Zap, AreaChart, Code, Mails } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Features - Website Chatbot for Lead Capture',
  description: 'Explore the powerful features of Local Lead Bot: 24/7 lead capture, industry-specific templates, real-time email alerts, and easy one-line-of-code installation.',
};

// Helper component for Feature Cards
const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

export default function FeaturesPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Local Lead Bot",
    "operatingSystem": "Web-based",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "29.00",
      "priceCurrency": "USD"
    },
    "featureList": [
      "24/7 Automated Lead Capture",
      "Customizable Conversation Scripts",
      "Industry-Specific Templates",
      "Real-Time Email Lead Notifications",
      "Simple 1-Line Code Installation",
      "Performance Analytics Dashboard"
    ],
    "description": "A web-based chatbot application designed to help local businesses capture leads from their website visitors 24/7."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Everything You Need to Convert Visitors into Leads
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our chatbot is packed with features to make lead capture simple, automated, and effective.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Bot size={32} />} title="24/7 Automated Lead Capture">
              Your bot works around the clock, engaging visitors and capturing their contact details even when you're closed, so you never miss an opportunity.
            </FeatureCard>
            <FeatureCard icon={<Wrench size={32} />} title="Customizable Conversations">
              Use our simple script builder to decide exactly what your bot asks. Qualify leads by asking for their needs, budget, or timeline upfront.
            </FeatureCard>
            <FeatureCard icon={<Mails size={32} />} title="Industry Templates">
              Get started in seconds with pre-built conversation scripts for dozens of local industries, from plumbers and electricians to dentists and restaurant owners.
            </FeatureCard>
            <FeatureCard icon={<Zap size={32} />} title="Real-Time Email Alerts">
              The moment your bot captures a new lead, we instantly send all the details directly to your email inbox so you can follow up while they're still hot.
            </FeatureCard>
            <FeatureCard icon={<Code size={32} />} title="Easy 1-Line Installation">
              If you can copy and paste, you can install Local Lead Bot. Simply add one line of code to your website and your bot is live. It's that easy.
            </FeatureCard>
            <FeatureCard icon={<AreaChart size={32} />} title="Performance Analytics">
              See how many visitors interact with your bot, how many leads it captures, and which of your website pages are converting the best with our simple dashboard.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to See These Features in Action?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose a plan that fits your business and start converting more website visitors today.
          </p>
          <Link href="/pricing" className="bg-blue-600 text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}