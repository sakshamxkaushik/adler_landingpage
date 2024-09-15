import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logo.png";


export const Header = () => {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-85">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Adler Logo" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors">
              Features
            </Link>
            <Link href="/investor" className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors">
              IR
            </Link>
            <Link href="/hr" className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors">
              Careers
            </Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-[#FF69B4] transition-colors">
              About Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white">
              Get In Touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              En
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
