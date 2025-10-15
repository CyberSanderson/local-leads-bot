// FILE: src/app/how-it-works/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Easy Chatbot Setup',
  description: 'Learn how Local Lead Bot works in 3 simple steps: Customize your bot, copy and paste one line of code onto your site, and start receiving new leads in your inbox.',
};

// Helper component for each step
const Step = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row items-start gap-8">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 bg-blue-600 text-white text-3xl font-bold rounded-full flex items-center justify-center">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default function HowItWorksPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Your Local Lead Bot Chatbot",
    "description": "A simple step-by-step guide to installing the Local Lead Bot chatbot on your website.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Customize Your Bot",
        "text": "Choose an industry template and customize your bot's colors, welcome message, and questions in our user-friendly dashboard.",
        "url": "https://www.localleadbot.com/how-it-works#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Copy & Paste One Line of Code",
        "text": "We provide you with a single JavaScript snippet. Simply copy and paste this code into your website's HTML before the closing </body> tag.",
        "url": "https://www.localleadbot.com/how-it-works#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Receive Leads in Your Inbox",
        "text": "Once the code is on your site, your bot is live. When a visitor provides their information, the lead details are instantly sent to your email.",
        "url": "https://www.localleadbot.com/how-it-works#step3"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Start Capturing Leads in Minutes
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our chatbot is designed to be powerful yet incredibly simple to set up. Here’s how easy it is.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <Step number="1" title="Customize Your Bot">
              First, choose a pre-built template for your industry. Then, use our simple dashboard to match the bot’s colors to your brand, write your welcome message, and define the questions you want to ask your visitors. No coding required.
            </Step>
            <Step number="2" title="Copy & Paste One Line of Code">
              {/* This is the corrected line - using single quotes instead of backticks */}
              We'll give you a single snippet of JavaScript. Just copy this line and paste it anywhere on your website before the final '&lt;/body&gt;' tag. It works with WordPress, Squarespace, Wix, and any other website platform.
            </Step>
            <Step number="3" title="Get Leads in Your Inbox">
              That's it! The moment you add the code, your bot is live on your site, ready to engage visitors 24/7. When a new lead is captured, we'll instantly forward all the details directly to your email inbox.
            </Step>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Ready to Put It to the Test?</h2>
          <p className="text-lg mt-2 mb-6">See for yourself how easy it is to find new customers.</p>
          <Link href="/pricing" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300">
            View Pricing and Plans
          </Link>
        </div>
      </section>
    </>
  );
}