'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/ui/button";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  return (
    <footer className="bg-black text-white py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#FC2D7C] transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-[#FC2D7C] transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-[#FC2D7C] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[#FC2D7C] transition-colors">FAQ</Link></li>
              <li><Link href="/tech-specs" className="hover:text-[#FC2D7C] transition-colors">Tech Specs</Link></li>
              <li><Link href="/media-room" className="hover:text-[#FC2D7C] transition-colors">Media Room</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/adler-universe" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC2D7C] transition-colors flex items-center"><FaLinkedin className="mr-2" /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/adler.universe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC2D7C] transition-colors flex items-center"><FaInstagram className="mr-2" /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Button variant="outline" className="mb-4 md:mb-0 border-white text-white hover:bg-white hover:text-black">
            Discover Adler 3D
          </Button>
          <Button className="bg-[#FC2D7C] hover:bg-[#FF69B4] text-white">
            Get Started Now
          </Button>
        </div>
        {!cookiesAccepted && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-between items-center">
            <p className="text-sm mr-4">This website uses cookies to ensure you get the best experience on our website.</p>
            <div>
              <Button variant="outline" className="mr-2 text-xs" onClick={() => setCookiesAccepted(true)}>
                Decline
              </Button>
              <Button className="bg-[#FC2D7C] hover:bg-[#FF69B4] text-white text-xs" onClick={() => setCookiesAccepted(true)}>
                Allow All
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>© 2023 Adler Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};