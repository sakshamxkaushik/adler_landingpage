"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/sections/Header";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";

const investors = [
  {name: "Korea Investment Partners Co., Ltd.",logo: "/images/investor/korea.png",},
  { name: "Lighthouse Ventures", logo: "/images/investor/lighthouse.png" },
  { name: "Evergreen", logo: "/images/investor/evergreen.png" },
  { name: "HYU Holdings", logo: "/images/investor/hyuholdings.png" },
  { name: "VDRC Investment Partners", logo: "/images/investor/woink.png" },
  { name: "a.camp", logo: "/images/investor/qcamo.png" },
  { name: "Ulysses Capital", logo: "/images/investor/ulysses.png" },
];

const timelineEvents = [
  {
    year: 2021,
    events: [
      { date: "Aug.", description: "Adler Inc. is established" },
      { date: "Sept.", description: "Raises $300,000 from angel investor" },
    ],
  },
  {
    year: 2022,
    events: [
      { // $320,000 OR $3.2M
        date: "Feb.",
        description:
          "Launches Alpha version\nRaises $370,000  in seed funding",
      },
      {
        date: "Apr.",
        description:
          "Alpha ver. reaches MAU of 25,000\nDevelops proprietary Three.js-based engine",
      },
      {
        date: "May",
        description:
          "Alpha ver. supports VR devices\nReaches 1000 influencer users on Alpha ver.",
      },
      { date: "Aug.", description: "Launches Beta version" },
      {
        date: "Sept.",
        description:
          'Participated as the main technical partner at "2022 Focus Paris", Carrousel du Louvre\nRaises cumulative investment of 2.7 bil. KRW',
      },
    ],
  },
  {
    year: 2023,
    events: [
      { date: "Apr.", description: "v.2.0.0 launched" },
      {
        date: "May",
        description:
          'Participated as the main technical partner at "2023 Focus New York", Chelsea Industrial, Manhattan\nFirst-ever 3D real-time Ad in New York\'s Times Square',
      },
      {
        date: "June",
        description:
          "Participated in Artist Junhong Min's exhibition at Korean Culture Center, Paris",
      },
    ],
  },
];

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header /> {/* Add the Header component here */}
      <main className="container mx-auto px-4 py-16">
        <section className="mb-14">
          <h1 className="text-4xl font-bold mb-2 text-center text-[#FC2D7C]">
            IR Materials
          </h1>
          <p className="text-center text-gray-600 mb-8">
            This page is used for requesting IR materials of Adler
          </p>
          <div className="relative overflow-hidden bg-[#FC2D7C] p-2 mb-6">
            <div className="flex animate-scroll">
              {[...investors, ...investors].map((investor, index) => (
                <div key={index} className="flex-shrink-0 w-[200px] mx-4">
                  <Image
                    src={investor.logo}
                    alt={investor.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mb-4">
            <p className="mb-4">
              Thank you for visiting. This page provides you with an email
              address where you can request regarding investor relations. If you
              have any questions about Adler Inc. please contact us at{" "}
              <a href="mailto:ir@adler.cx" className="text-[#FC2D7C] font-bold">
                ir@adler.cx
              </a>
              .
            </p>
            <p className="text-sm text-gray-500">
              Please note that the above email is only for inquiries related to
              IR materials. For all other inquiries about Adler services, please
              contact help@adler.cx
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Timeline</h2>
          <p className="text-xl mb-8">
            Team Adler is determined for growth and a better tomorrow
          </p>
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
      <Footer /> {/* Add the Footer component here */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
