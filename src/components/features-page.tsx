'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Ubuntu } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4 overflow-hidden rounded-lg">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </motion.div>
)

interface TechFeatureProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}

const TechFeature: React.FC<TechFeatureProps> = ({ icon, title, subtitle, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4 overflow-hidden rounded-lg">{icon}</div>
    <h3 className="text-lg font-bold text-[#FC2D7C] mb-1">{title}</h3>
    <h4 className="text-md font-semibold mb-2">{subtitle}</h4>
    <p className="text-sm">{description}</p>
  </motion.div>
)

export function FeaturesPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 ${ubuntu.className}`}>
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          id="features" 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">The door to Virtual Universe: we open it with artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Feature
              icon={<Image src="/images/features/1.jpg" alt="3D Feed" width={500} height={500} className="rounded-lg" />}
              title="3D feed at your fingertips"
              description="Create your own space with a preset theme and your own images. Explore other spaces with infinite scrolling."
            />
            <Feature
              icon={<Image src="/images/features/2.gif" alt="Familiar yet new" width={500} height={500} className="rounded-lg" />}
              title="Familiar yet new"
              description="From text and voice chat to Multiplay mode - we make familiar features easy and innovate brand new social features."
            />
            <Feature
              icon={<Image src="/images/features/3.jpg" alt="Creator Studio" width={500} height={500} className="rounded-lg" />}
              title="Creator Studio"
              description="Access advanced edit features and your insights dashboard. Search for 3D items in OBJECT LIBRARY."
            />
          </div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Early Access to Adler Studio <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.section>

        <motion.section 
          id="how-it-works" 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Adler's tech makes 3D easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechFeature
              icon={<Image src="/images/tech/1.png" alt="Fast 3D" width={500} height={500} className="rounded-lg" />}
              title="Fast 3D"
              subtitle="Adler Engine with 1-second load time"
              description="Also runs on slow internet and low-spec devices. No app installation necessary."
            />
            <TechFeature
              icon={<Image src="/images/tech/2.png" alt="Convenient 3D" width={500} height={500} className="rounded-lg" />}
              title="Convenient 3D"
              subtitle="XRML, 3D language based on HTML"
              description="A unique XRML markup language developed based on the familiar HTML syntax. Creation should be easy for everyone."
            />
            <TechFeature
              icon={<Image src="/images/tech/3.png" alt="Simple 3D" width={500} height={500} className="rounded-lg" />}
              title="Simple 3D"
              subtitle="Look up with keywords, 3D Search Algorithm"
              description="Matches 3D models with keywords and returns immediate results, just like 2D image files."
            />
          </div>
        </motion.section>
      </main>
    </div>
  )
}