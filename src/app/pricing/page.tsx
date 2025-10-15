// FILE: src/app/pricing/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - Local Lead Bot',
  description:
    'Choose a plan that fits your business. Start with a free trial and scale up as your leads grow.',
};

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    <Check className="w-5 h-5 text-blue-600" />
    <span>{children}</span>
  </li>
);

export default function PricingPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Local Lead Bot Plans',
    description:
      'AI chatbot plans for local businesses that automate lead collection and appointment booking.',
    brand: { '@type': 'Brand', name: 'Local Lead Bot' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Plan',
        price: '29.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '59.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Plan',
        price: 'Contact Us',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that fits your business goals. Start with a free trial and scale as your leads grow.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <p className="text-gray-500 mt-2">Perfect for testing the waters.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">$29/mo</p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>Up to 100 Leads / Month</PlanFeature>
                <PlanFeature>Basic Analytics</PlanFeature>
                <PlanFeature>Email Notifications</PlanFeature>
                <PlanFeature>Standard Support</PlanFeature>
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col border-4 border-blue-600 transform scale-105">
              <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              <p className="text-gray-500 mt-2">Best for growing businesses.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">$59/mo</p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>Up to 500 Leads / Month</PlanFeature>
                <PlanFeature>Advanced Analytics</PlanFeature>
                <PlanFeature>Priority Email &amp; Chat Support</PlanFeature>
                <PlanFeature>CRM Integration</PlanFeature>
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upgrade to Pro
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div
              id="enterprise"
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-gray-500 mt-2">For large-scale operations.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">
                Let&apos;s Talk
              </p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>Unlimited Campaigns</PlanFeature>
                <PlanFeature>Custom Lead Volume</PlanFeature>
                <PlanFeature>API Access</PlanFeature>
                <PlanFeature>Dedicated Account Manager</PlanFeature>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                What counts as a &quot;lead&quot;?
              </h3>
              <p className="mt-2 text-gray-700">
                A lead is a unique business or individual that matches your
                campaign criteria and is delivered to your dashboard. We
                don&apos;t charge for duplicates or poor-quality data.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                Can I cancel anytime?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, you can cancel your plan anytime without penalties. Your
                account will remain active until the end of the billing cycle.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                Do you offer refunds?
              </h3>
              <p className="mt-2 text-gray-700">
                We offer a 14-day satisfaction guarantee. If you&apos;re not
                happy with your results, contact us and we&apos;ll issue a full
                refund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
