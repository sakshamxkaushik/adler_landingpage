"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/ui/button";


const investors = [
  { name: "Korea Investment Partners Co., Ltd.", logo: "/images/investor/0b5b459510264.png" },
  { name: "Lighthouse Ventures", logo: "/images/investor/326e6b47a4c66.png" },
  { name: "Evergreen", logo: "/images/investor/c81f1770f84fb.png" },
  { name: "HYU Holdings", logo: "/images/investor/076597ed48b1d.png" },
  { name: "VDRC Investment Partners", logo: "/images/investor/8ac300d0e55ee.png" },
  { name: "a.camp", logo: "/images/investor/86823cd3f002c.png" },
  { name: "Ulysses Capital", logo: "/images/investor/2d4856d4a6dac.png" },
];

const timelineEvents = [
  {
    year: 2021,
    events: [
      { date: "Aug.", description: "Adler Inc. is established" },
      { date: "Sept.", description: "Raises 390 mil. KRW from angel investor" },
    ],
  },
  {
    year: 2022,
    events: [
      { date: "Feb.", description: "Launches Alpha version\nRaises 500 mil. KRW in seed funding" },
      { date: "Apr.", description: "Alpha ver. reaches MAU of 25,000\nDevelops proprietary Three.js-based engine" },
      { date: "May", description: "Alpha ver. supports VR devices\nReaches 1000 influencer users on Alpha ver." },
      { date: "Aug.", description: "Launches Beta version" },
      { date: "Sept.", description: "Participated as the main technical partner at \"2022 Focus Paris\", Carrousel du Louvre\nRaises cumulative investment of 2.7 bil. KRW" },
    ],
  },
  {
    year: 2023,
    events: [
      { date: "Apr.", description: "v.2.0.0 launched" },
      { date: "May", description: "Participated as the main technical partner at \"2023 Focus New York\", Chelsea Industrial, Manhattan\nFirst-ever 3D real-time Ad in New York's Times Square" },
      { date: "June", description: "Participated in Artist Junhong Min's exhibition at Korean Culture Center, Paris" },
    ],
  },
];

export default function InvestorPage() {
  return (
    <div className={`min-h-screen bg-black text-white`}>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Investor</h2>
          <p className="text-xl mb-8">Investors with foresight are on board with Team Adler</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg">
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4">Adler is on Series A round</p>
            <Button className="bg-white text-black hover:bg-gray-200">Request IR materials</Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Timeline</h2>
          <p className="text-xl mb-8">Team Adler is determined for growth and a better tomorrow</p>
          <div className="space-y-8">
            {timelineEvents.map((yearGroup, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-4">{yearGroup.year}</h3>
                <ul className="space-y-4">
                  {yearGroup.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex">
                      <span className="font-bold mr-4">{event.date}</span>
                      <span>{event.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}