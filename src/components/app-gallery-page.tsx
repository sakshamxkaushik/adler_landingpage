'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView, useDragControls } from 'framer-motion'

interface AutoScrollCarouselProps {
  images: string[]
  direction: 'left' | 'right'
}

function AutoScrollCarousel({ images, direction }: AutoScrollCarouselProps) {
  const controls = useAnimation()
  const dragControls = useDragControls()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start({
        x: direction === 'left' 
          ? [0, -400 * images.length] 
          : [-400 * images.length, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, images.length, inView, direction])

  return (
    <div ref={ref} className="overflow-hidden h-[225px]">
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        animate={controls}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: -400 * images.length, right: 0 }}
        style={{ width: `${images.length * 400 * 2}px` }}
      >
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="w-[400px] h-[225px] flex-shrink-0 p-2">
            <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const topRowImages = [
  '/images/timesquare/2.png',
  '/images/timesquare/0.jpg',
  '/images/timesquare/1.jpg',
  '/images/timesquare/3.jpg',
]

const bottomRowImages = [
  '/images/timesquare/4.png',
  '/images/timesquare/5.jpg',
  '/images/timesquare/6.png',
  '/images/timesquare/7.jpg',
]

export function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Adler Gallery
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Explore our curated collection of virtual art exhibitions
        </p>
        <div className="w-full max-w-[1600px] mx-auto overflow-hidden">
          <AutoScrollCarousel images={topRowImages} direction="left" />
          <AutoScrollCarousel images={bottomRowImages} direction="right" />
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Our gallery showcases a diverse range of artworks from talented artists around the world.
            Immerse yourself in these virtual exhibitions and experience art like never before.
          </p>
          <button className="bg-[#FC2D7C] hover:bg-[#FC2D7C]/80 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}