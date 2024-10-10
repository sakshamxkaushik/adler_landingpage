'use client'

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <nav className="mb-4">
              <ul className="flex space-x-6 text-lg">
                <li><a href="/hrpage" className="hover:text-gray-900">Career</a></li>
                <li><a href="/ir" className="hover:text-gray-900">IR</a></li>
                <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </nav>
            <address className="not-italic mb-2 text-sm">
              Address : 2nd floor, 25, 224-gil Nambusunhwan-ro, Gwanak-gu, Seoul<br />
              Addr. Seoul, Korea | Biz License 772-88-02469
            </address>
            <p className="text-sm mb-2">TEL : 02.874.6182</p>
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              English
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe to our newsletter to get the latest News<br />
              and resources from <span className="text-pink-500">Adler</span>
            </h2>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="flex-grow bg-pink-50 rounded-full"
              />
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
          <div className="w-1/3">
            <Image
              src="/images/logo.png"
              alt="Adler Logo"
              width={100}
              height={40}
            />
          </div>
          <p className="text-sm w-1/3 text-center">© 2024 Adler. All rights reserved</p>
          <div className="w-1/3 flex justify-end space-x-4">
            <a href="https://www.linkedin.com/company/adler-universe/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/adler.universe/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}