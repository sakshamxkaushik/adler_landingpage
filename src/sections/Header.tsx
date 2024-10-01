"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Globe } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';
import Logo from "@/assets/images/logo.png";

const navItems = [
  { href: "features", label: "Features" },
  { href: "how-it-works", label: "How It Works" },
  { href: "ir", label: "Investors" },
  { href: "careers", label: "Careers" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-85 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Adler Logo" width={120} height={40} />
          </Link>
        

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[#FF69B4]" aria-label="Toggle dark mode">
              <Sun size={20} />
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-lg font-medium text-white hover:text-[#FF69B4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};