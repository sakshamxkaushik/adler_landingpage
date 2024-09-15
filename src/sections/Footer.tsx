import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return 

  <footer className="bg-gray-100 text-gray-600 py-8">
  <div className="container mx-auto px-4 text-center">
    <p>&copy; 2024 Adler. All rights reserved.</p>
    <div className="mt-4">
      <Link href="/privacy" className="mx-2 hover:underline hover:text-[#FC2D7C]">Privacy Policy</Link>
      <Link href="/terms" className="mx-2 hover:underline hover:text-[#FC2D7C]">Terms of Service</Link>
      <Link href="/contact" className="mx-2 hover:underline hover:text-[#FC2D7C]">Contact Us</Link>
    </div>
  </div>
</footer>
}
