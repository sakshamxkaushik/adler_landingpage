'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Ubuntu } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

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
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
    <div className="text-[#FF69B4] mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
)

interface TechFeatureProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}

const TechFeature: React.FC<TechFeatureProps> = ({ icon, title, subtitle, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
    <div className="text-[#FF69B4] mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-[#FF69B4] mb-1">{title}</h3>
    <h4 className="text-md font-semibold mb-2">{subtitle}</h4>
    <p className="text-sm">{description}</p>
  </div>
)

export function FeaturesPage() {
  return (
    <div className={`min-h-screen bg-gray-100 text-gray-800 ${ubuntu.className}`}>
      <main className="container mx-auto px-4 py-16">
        <section id="features" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">The door to Virtual Universe: we open it with artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Feature
              icon={<Image src="/images/features/1.jpg" alt="3D Feed" width={500} height={500} />}
              title="3D feed at your fingertips"
              description="Create your own space with a preset theme and your own images. Explore other spaces with infinite scrolling."
            />
            <Feature
              icon={<Image src="/images/features/2.gif" alt="3D Feed" width={500} height={500} />}
              title="Familiar yet new"
              description="From text and voice chat to Multiplay mode - we make familiar features easy and innovate brand new social features."
            />
            <Feature
              icon={<Image src="/images/features/3.jpg" alt="3D Feed" width={500} height={500} />}
              title="Creator Studio"
              description="Access advanced edit features and your insights dashboard. Search for 3D items in OBJECT LIBRARY."
            />
          </div>
          <div className="text-center">
            <Button className="bg-[#FC2D7C] hover:bg-[#1F1F1F] text-white text-lg py-6 px-8">
              Get Early Access to Adler Studio <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="how-it-works" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Adler's tech makes 3D easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechFeature
              icon={<Image src="/images/tech/1.png" alt="3D Feed" width={500} height={500} />}
              title="Fast 3D"
              subtitle="Adler Engine with 1-second load time"
              description="Also runs on slow internet and low-spec devices. No app installation necessary."
            />
            <TechFeature
              icon={<Image src="/images/tech/2.png" alt="3D Feed" width={500} height={500} />}
              title="Convenient 3D"
              subtitle="XRML, 3D language based on HTML"
              description="A unique XRML markup language developed based on the familiar HTML syntax. Creation should be easy for everyone."
            />
            <TechFeature
              icon={<Image src="/images/tech/3.png" alt="3D Feed" width={500} height={500} />}
              title="Simple 3D"
              subtitle="Look up with keywords, 3D Search Algorithm"
              description="Matches 3D models with keywords and returns immediate results, just like 2D image files."
            />
          </div>
        </section>
      </main>
    </div>
  )
}