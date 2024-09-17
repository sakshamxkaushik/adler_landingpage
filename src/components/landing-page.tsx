"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/ui/button"
import { ChevronDown, Play } from "lucide-react"


export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1,
    },
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <div 
      className={`min-h-screen text-white cursor-none`}
      onMouseEnter={() => setCursorVariant("hover")}
      onMouseLeave={() => setCursorVariant("default")}
      onClick={handlePlayVideo}
    >
      <AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        >
          <motion.div
            variants={variants}
            animate={cursorVariant}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-[#FC2D7C] text-white rounded-full p-2 flex items-center justify-center w-20 h-20"
          >
            <Play size={16} className="mr-1" />
            <span className="text-xs">Play</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
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