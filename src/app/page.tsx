// FILE: src/app/page.tsx

import Link from 'next/link';
import { MessageSquare, Zap, Code } from 'lucide-react'; // Updated icons

// Helper component for feature items
const FeatureItem = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);


export default function Home() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Local Lead Bot",
    "applicationCategory": "BusinessApplication",
    "description": "Local Lead Bot provides a simple, customizable website chatbot for local businesses to engage visitors, answer questions, and capture leads automatically, 24/7.",
    "url": "https://www.localleadbot.com",
    "offers": {
      "@type": "Offer",
      "price": "29.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Turn Your Website Visitors into Leads, 24/7
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Add our smart chatbot to your website in minutes. Automatically engage customers, answer questions, and get new leads sent directly to your inbox.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/get-started" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
              Get Started for Free
            </Link>
            <Link href="/how-it-works" className="bg-gray-200 text-gray-800 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-300 transition-all duration-300">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Easiest Way to Capture More Leads</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Engage every visitor with a helpful, automated assistant.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem icon={<MessageSquare size={32} />} title="Engage Visitors">
              Greet every person who lands on your site with a custom message and capture their interest instantly.
            </FeatureItem>
            <FeatureItem icon={<Zap size={32} />} title="Capture Leads">
              Our bot asks the right questions and collects contact info, sending new leads straight to your email.
            </FeatureItem>
            <FeatureItem icon={<Code size={32} />} title="Easy Setup">
              Customize your bot and install it on your website with one line of code. No experience needed.
            </FeatureItem>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stop Missing Leads?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Let your website work for you, even when you're not online. Start your free trial today.
          </p>
          <Link href="/get-started" className="bg-white text-blue-600 font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </>
  );
}