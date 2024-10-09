"use client"

import React, { useRef, useEffect } from "react"
import { Button } from "@/ui/button"
import { ChevronDown } from "lucide-react"



export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className={`min-h-screen text-white `}>
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
        <div className="relative z-10 h-full grid grid-rows-[1fr,auto,1fr] items-center justify-items-center p-4">
          <div className="row-start-2 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              Join the 3D Revolution
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Transform Your Ideas into Reality
            </p>
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white text-lg py-2 px-6">
              Get Started
            </Button>
          </div>
          <div className="row-start-3 self-end pb-8 text-center">
            <p className="text-sm mb-2">Scroll Down</p>
            <ChevronDown className="animate-bounce mx-auto" size={24} />
          </div>
        </div>
      </main>
    </div>
  )
}