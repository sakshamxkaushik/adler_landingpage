import React from 'react'
import { Header } from "@/sections/Header"
import LandingPageWrapper from '@/components/landing-page'
import FeaturePage from '@/components/featurepage'
import { Gallery } from '@/components/app-gallery-page'
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section id="landing" className="flex-grow">
        <LandingPageWrapper />
      </section>
      <section id="features">
        <FeaturePage />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <Footer />
    </main>
  )
}