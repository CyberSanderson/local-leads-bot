// FILE: src/app/about/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Our Mission to Empower Local Businesses',
  description: 'Learn about the team and the mission behind Local Lead Bot. We are dedicated to providing powerful, easy-to-use marketing tools for small businesses to thrive.',
};

// Simulate team member data
const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in local marketing, Alex founded Local Lead Bot to solve the biggest challenge small businesses face: finding new customers.',
  },
  {
    name: 'Brenda Chen',
    role: 'Lead Engineer',
    bio: 'Brenda is the architect behind our powerful bot. She is passionate about building intuitive software that delivers real-world results.',
  },
  {
    name: 'Carlos Rivera',
    role: 'Head of Customer Success',
    bio: 'Carlos lives to help our customers succeed. He and his team are dedicated to providing world-class support and guidance.',
  },
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Local Lead Bot",
    "description": "Information about the mission, values, and team behind Local Lead Bot.",
    "url": "https://www.localleadbot.com/about",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="bg-white">
        {/* Page Header / Mission */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              We're on a Mission to Help Local Businesses Thrive
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              In a world dominated by large corporations, we believe in empowering the small, local businesses that form the backbone of our communities.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Image of our team or office</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Local Lead Bot was born from a simple observation: local business owners are experts at their craft, but often struggle with the complex and time-consuming task of digital marketing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We set out to create a tool that was not only powerful but incredibly simple to use—a tool that levels the playing field and allows any business to find new customers online, without needing a big budget or a team of marketers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Team</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">The passionate individuals dedicated to your success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Community of Growing Businesses</h2>
            <Link href="/pricing" className="bg-blue-600 text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
              See Pricing and Plans
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}