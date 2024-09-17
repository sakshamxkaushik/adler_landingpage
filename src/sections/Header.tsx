"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Ubuntu } from "next/font/google";
import { Button } from "@/ui/button";
import Logo from "@/assets/images/logo.png";


const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-black bg-opacity-85" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Adler Logo" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="https://adler-dev3.vercel.app/"
              className="text-sm font-bold text-white hover:text-[#FF69B4] transition-colors"
            >
              Adler 3D
            </Link>
            <Link
              href="/feature"
              className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors"
            >
              IR
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              En
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};