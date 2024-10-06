import React from 'react'
import { Header } from "@/sections/Header"
import LandingPageWrapper from '@/components/landing-page'
import FeaturePage from '@/components/featurepage'
import { UseCasesCarousel } from '@/components/UseCasesCarousel'
import { Gallery } from '@/components/app-gallery-page'
import Footer from "@/sections/Footer"
import { Lnews } from '@/components/l_news'
// import {Timeline} from '@/components/Timeline'

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
      <section id="use-cases" className="overflow-hidden">
        <UseCasesCarousel />
      </section>
      <section id="news" className="bg-gray-50 dark:bg-gray-900">
        <Lnews />
      </section>
      {/* <section id="timeline" className="bg-white">
        <Timeline />
      </section> */}
      <section id="gallery">
        <Gallery />
      </section>
      <Footer />
    </main>
  )
}