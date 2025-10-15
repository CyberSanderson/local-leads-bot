// FILE: src/app/layout.tsx

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google'; // Import the font
import "./globals.css";

// Configure the font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.localleadbot.com"),
  title: {
    template: "%s | Local Lead Bot",
    default: "Local Lead Bot - Automated Lead Generation for Local Businesses",
  },
  description: "Supercharge your local business with Local Lead Bot, the automated solution for finding and engaging high-quality leads in your area. Get started today!",
  keywords: ["local lead generation", "small business leads", "automated marketing", "lead bot", "local SEO"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add the font's className to the html tag
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}