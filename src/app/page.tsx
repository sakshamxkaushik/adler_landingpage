import React from 'react'
import { Header } from "@/sections/Header"
import LandingPageWrapper from '@/components/landing-page'
import FeaturePage from '@/components/featurepage'
import { Gallery } from '@/components/app-gallery-page'
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <section id="landing">
        <LandingPageWrapper />
      </section>
      <section id="features">
        <FeaturePage />
      </section>
      <Gallery />
      <Footer />
    </main>
  )
}