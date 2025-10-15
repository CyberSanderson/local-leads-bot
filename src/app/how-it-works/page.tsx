// FILE: src/app/how-it-works/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Easy Chatbot Setup',
  description:
    'Learn how Local Lead Bot works in 3 simple steps: Customize your bot, copy and paste one line of code onto your site, and start receiving new leads in your inbox.',
};

const Step = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
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
    // ...schema data...
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
            {
              "Our chatbot is designed to be powerful yet incredibly simple to set up. Here&apos;s how easy it is."
            }
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <Step number="1" title="Customize Your Bot">
              {
                "First, choose a pre-built template for your industry. Then, use our simple dashboard to match the bot’s colors to your brand, write your welcome message, and define the questions you want to ask your visitors. No coding required."
              }
            </Step>

            <Step number="2" title="Copy & Paste One Line of Code">
              {
                "We&apos;ll give you a single snippet of JavaScript. Just copy this line and paste it anywhere on your website before the final &lt;/body&gt; tag. It works with WordPress, Squarespace, Wix, and any other website platform."
              }
            </Step>

            <Step number="3" title="Get Leads in Your Inbox">
              {
                "That&apos;s it! The moment you add the code, your bot is live on your site, ready to engage visitors 24/7. When a new lead is captured, we&apos;ll instantly forward all the details directly to your email inbox."
              }
            </Step>
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                Does this work on my website?
              </h3>
              <p className="mt-2 text-gray-700">
                {
                  "Yes. As long as you can edit your website&apos;s HTML to paste in one line of code, our chatbot will work. This includes virtually all website builders like WordPress, Wix, Squarespace, etc."
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                Do I need to know how to code?
              </h3>
              <p className="mt-2 text-gray-700">
                {
                  "Not at all! Customizing and installing the bot is a simple copy-and-paste process. All the settings are managed in our easy-to-use dashboard."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
