'use client'

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin } from "lucide-react"

export default function FooterComponent() {
  return (
    <footer className="bg-white py-12 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-bold text-[#FC4289] opacity-20">
          Adler
        </span>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-600">Career</a></li>
              <li><a href="#" className="text-black hover:text-gray-600">IR</a></li>
              <li><a href="#" className="text-black hover:text-gray-600">Contact</a></li>
            </ul>
            <p className="text-black text-sm mt-4">
              Address: 2nd floor, 25 234-gil Nambusunhwan-ro, Gwanak-gu, Seoul<br />
              Adler, Seoul, Korea | Biz License 772-88-02469<br />
              TEL: 02-874-6182
            </p>
          </div>
          <div className="w-full md:w-2/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-black">Subscribe to our newsletter to get the latest News</h3>
            <p className="text-black mb-4">and resources from Adler</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#FFF0F5] text-black border-[#FC4289]"
              />
              <Button type="submit" className="bg-[#FC4289] text-white hover:bg-[#FC4289]/90">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="w-full md:w-1/4">
            <div className="flex space-x-4 justify-end">
              <a href="#" className="text-[#FC4289] hover:text-[#FC4289]/90">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FC4289] hover:text-[#FC4289]/90">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#FC4289] text-center flex justify-between items-center">
          <Button className="bg-[#FC4289] text-white hover:bg-[#FC4289]/90 rounded-full px-6 py-2">
            <span className="mr-2">♥</span> Adler
          </Button>
          <p className="text-black">&copy; 2024 Adler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}