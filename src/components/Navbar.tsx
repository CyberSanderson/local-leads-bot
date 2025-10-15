// FILE: src/components/Navbar.tsx

"use client"; // This is a client component because it uses state

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Site Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-300">
            Local Lead Bot
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/get-started" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform-none' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
           <div className="text-2xl font-bold text-gray-800">
              <Link href="/" onClick={toggleMenu} className="hover:text-blue-600">Local Lead Bot</Link>
           </div>
           <button onClick={toggleMenu} aria-label="Close menu">
             <X size={28} />
           </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={toggleMenu} className="text-3xl font-semibold text-gray-800 hover:text-blue-600">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
             <Link href="/get-started" onClick={toggleMenu} className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-2xl hover:bg-blue-700">
                Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}