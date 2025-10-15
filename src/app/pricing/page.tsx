// FILE: src/app/pricing/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Find the perfect plan for your business. Local Lead Bot offers flexible and affordable pricing tiers to help you start generating local leads today, from free trials to enterprise solutions.',
};

// Helper component for list items in pricing cards
const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export default function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Local Lead Bot Subscription",
    "description": "Subscription plans for the Local Lead Bot software service.",
    "brand": {
      "@type": "Brand",
      "name": "Local Lead Bot"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "29",
        "priceCurrency": "USD",
        "description": "Ideal for individuals and small businesses getting started.",
        "url": "https://www.localleadbot.com/pricing#starter"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan",
        "price": "79",
        "priceCurrency": "USD",
        "description": "Perfect for growing businesses that need more power and automation.",
        "url": "https://www.localleadbot.com/pricing#pro"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "price": "Contact for price",
        "priceCurrency": "USD",
        "description": "Custom solutions for large teams and agencies with specific needs.",
        "url": "https://www.localleadbot.com/pricing#enterprise"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page Header */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Find the Perfect Plan for Your Business
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Start for free and scale as you grow. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter Plan */}
            <div id="starter" className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <p className="text-gray-500 mt-2">Ideal for getting started.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">$29<span className="text-lg font-medium text-gray-500">/mo</span></p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>1 Lead Bot Campaign</PlanFeature>
                <PlanFeature>500 Leads per Month</PlanFeature>
                <PlanFeature>Basic Analytics</PlanFeature>
                <PlanFeature>Email Support</PlanFeature>
              </ul>
              <Link href="/get-started?plan=starter" className="mt-8 block w-full text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                Choose Starter
              </Link>
            </div>

            {/* Pro Plan (Most Popular) */}
            <div id="pro" className="bg-white p-8 rounded-xl shadow-xl ring-2 ring-blue-600 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm">Most Popular</div>
              <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              <p className="text-gray-500 mt-2">For businesses ready to scale.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">$79<span className="text-lg font-medium text-gray-500">/mo</span></p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>5 Lead Bot Campaigns</PlanFeature>
                <PlanFeature>2,500 Leads per Month</PlanFeature>
                <PlanFeature>Advanced Analytics</PlanFeature>
                <PlanFeature>Automated Outreach</PlanFeature>
                <PlanFeature>Priority Support</PlanFeature>
              </ul>
              <Link href="/get-started?plan=pro" className="mt-8 block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Choose Pro
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div id="enterprise" className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-gray-500 mt-2">For large-scale operations.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">Let's Talk</p>
              <ul className="space-y-4 text-gray-700 mt-8 flex-grow">
                <PlanFeature>Unlimited Campaigns</PlanFeature>
                <PlanFeature>Custom Lead Volume</PlanFeature>
                <PlanFeature>API Access</PlanFeature>
                <PlanFeature>Dedicated Account Manager</PlanFeature>
              </ul>
              <Link href="/contact" className="mt-8 block w-full text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-blue-600"/>Can I change my plan later?</h3>
              <p className="mt-2 text-gray-700">Yes, absolutely. You can upgrade or downgrade your plan at any time from your account dashboard.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-blue-600"/>Is there a free trial?</h3>
              <p className="mt-2 text-gray-700">Yes! Every plan starts with a 14-day free trial so you can experience the full power of Local Lead Bot before you commit.</p>
            </div>
             <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-blue-600"/>What counts as a "lead"?</h3>
              <p className="mt-2 text-gray-700">A lead is a unique business or individual that matches your campaign criteria and is delivered to your dashboard. We don't charge for duplicates or poor-quality data.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}