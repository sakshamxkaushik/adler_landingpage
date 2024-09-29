'use client'

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const investorLogos = [
  "/images/investor/korea.png",
  "/images/investor/evergreen.png",
  "/images/investor/hyuholdings.png",
  "/images/investor/lighthouse.png",
  "/images/investor/qcamo.png",
  "/images/investor/lighthouse.png",
]

export default function FooterWithSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % investorLogos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % investorLogos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + investorLogos.length) % investorLogos.length)
  }

  return (
    <footer className="bg-gradient-to-r from-pink-300 to-pink-400 py-12 relative overflow-hidden">
      {/* Investor Slider */}
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">Our Investors</h3>
        <div className="relative flex items-center">
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-white rounded-full p-2">
            <ChevronLeft className="w-6 h-6 text-pink-500" />
          </button>
          <div className="overflow-hidden mx-10">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {investorLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Investor ${index + 1}`} className="w-40 h-20 object-contain mx-4" />
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="absolute right-0 z-10 bg-white rounded-full p-2">
            <ChevronRight className="w-6 h-6 text-pink-500" />
          </button>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-bold text-white opacity-10">
          Adler
        </span>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200">Career</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">IR</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
            </ul>
            <p className="text-white text-sm mt-4">
              Address: 2nd floor, 25 234-gil Nambusunhwan-ro, Gwanak-gu, Seoul<br />
              Adler, Seoul, Korea | Biz License 772-88-02469<br />
              TEL: 02-874-6182
            </p>
          </div>
          <div className="w-full md:w-2/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to our newsletter to get the latest News</h3>
            <p className="text-white mb-4">and resources from Adler</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white text-pink-500 border-pink-500"
              />
              <Button type="submit" className="bg-white text-pink-500 hover:bg-pink-100">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="w-full md:w-1/4">
            <div className="flex space-x-4 justify-end">
              <a href="#" className="text-white hover:text-gray-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white text-center flex justify-between items-center">
          <Button className="bg-white text-pink-500 hover:bg-pink-100 rounded-full px-6 py-2">
            <span className="mr-2">♥</span> Adler
          </Button>
          <p className="text-white">&copy; 2024 Adler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}