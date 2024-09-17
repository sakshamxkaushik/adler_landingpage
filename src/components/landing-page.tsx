"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/ui/button";
import { ChevronDown } from "lucide-react";
import { Ubuntu } from "next/font/google";


const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <div className={`min-h-screen text-white ${ubuntu.className}`}>
    

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <iframe
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/PXef6QF0KHY?autoplay=1&mute=1&loop=1&playlist=PXef6QF0KHY&controls=0&modestbranding=1&rel=0"
            
            title="Adler NY 2023"
            
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            
          ></iframe>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Join the 3D Revolution
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform Your Ideas into Reality
            </p>
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white text-lg py-2 px-6">
              Get Started
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-sm mb-2">Scroll Down</p>
            <ChevronDown className="animate-bounce mx-auto" size={24} />
          </div>
        </section>
      </main>
    </div>
  );
}
