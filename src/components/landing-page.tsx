"use client"

import React, { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="min-h-screen text-white">
      <main className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/images/timesquare/ny.mp4"
            title="Adler NY 2023"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <div className="text-center flex-grow flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              Live Your True Self
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Express Yourself in a Virtual Universe Designed for You
            </p>
            <Link href="https://adler-dev3.vercel.app/">
              <Button 
                className="bg-[#FC2D7C] hover:bg-[#FC2D7C]/80 text-white text-lg py-2 px-6 rounded-full transition-colors duration-300"
              >
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex justify-center space-x-8">
            <Image src="/images/investor/0b5b459510264.png" alt="True Friend" width={150} height={100} />
            <Image src="/images/investor/326e6b47a4c66.png" alt="Korea Investment Partners Co., Ltd." width={150} height={100} />
            <Image src="/images/investor/c81f1770f84fb.png" alt="HYU Holdings" width={150} height={100} />
            <Image src="/images/investor/076597ed48b1d.png" alt="Ulysses Capital" width={150} height={100} />
            <Image src="/images/investor/8ac300d0e55ee.png" alt="Evergreen" width={150} height={100} />
            <Image src="/images/investor/86823cd3f002c.png" alt="Lighthouse" width={150} height={100} />
          </div>
        </div>
      </main>
    </div>
  )
}