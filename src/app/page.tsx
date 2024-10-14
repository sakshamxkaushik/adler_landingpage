import React from 'react'
import LandingPageWrapper from '@/components/landing-page'
import { Header } from "@/sections/Header"
import FeaturePage from '@/app/feature/page'
import { UseCasesCarousel } from '@/components/UseCasesCarousel'
import { Gallery } from '@/components/app-gallery-page'
import  News  from '@/app/news/page'
import Timeline from '@/app/Timeline/Timeline'
import Footer from "@/sections/Footer"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section id="landing" className="flex-grow">
        <LandingPageWrapper />
      {/* </section>
      <section id="features">
        <FeaturePage /> */}
      </section>
      <section id="use-cases" className="overflow-hidden">
        <UseCasesCarousel />
      </section>
      <section id="gallery" className="bg-white">
        <Gallery />
      </section>
      <section id="news" className="bg-white">
        <News />
      {/* </section>
      <section id="timeline" className="bg-white">
        <Timeline /> */}
      </section>
      <Footer />
    </main>
  )
}