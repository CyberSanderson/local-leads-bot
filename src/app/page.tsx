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
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default function Home() {
  const softwareApplicationSchema = {
    // ... schema data ...
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      <section className="bg-white py-20 md:py-32">
        {/* Hero section code */}
      </section>

      <section className="bg-gray-50 py-20">
        {/* Features section code */}
      </section>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Missing Leads?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {
              "Let your website work for you, even when you&apos;re not online. Start your free trial today."
            }
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
