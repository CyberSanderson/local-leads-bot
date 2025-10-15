// FILE: src/app/pricing/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';

export const metadata = { /* ... metadata ... */ };

const PlanFeature = ({ children }: { children: React.ReactNode }) => ( /* ... component code ... */ );

export default function PricingPage() {
  const productSchema = { /* ... schema data ... */ };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <section className="bg-white py-16 md:py-24">
        {/* ... header section code ... */}
      </section>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* ... Starter Plan card ... */}
            {/* ... Pro Plan card ... */}
            <div id="enterprise" className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-gray-500 mt-2">For large-scale operations.</p>
              <p className="text-4xl font-extrabold text-gray-900 mt-6">{"Let's Talk"}</p>
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* ... other FAQ items ... */}
             <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-blue-600"/>{'What counts as a "lead"?'}</h3>
              <p className="mt-2 text-gray-700">{"A lead is a unique business or individual that matches your campaign criteria and is delivered to your dashboard. We don't charge for duplicates or poor-quality data."}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}