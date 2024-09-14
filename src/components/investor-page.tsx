"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Placeholder investor logos
const investors = [
  { name: "Korea Investment Partners Co., Ltd.", logo: "/images/investor/0b5b459510264.png" },
  { name: "Lighthouse Ventures", logo: "/images/investor/326e6b47a4c66.png" },
  { name: "Evergreen", logo: "/images/investor/c81f1770f84fb.png" },
  { name: "HYU Holdings", logo: "/images/investor/076597ed48b1d.png" },
  { name: "VDRC Investment Partners", logo: "/images/investor/8ac300d0e55ee.png" },
  { name: "a.camp", logo: "/images/investor/86823cd3f002c.png" },
  { name: "Ulysses Capital", logo: "/images/investor/2d4856d4a6dac.png" },
]

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
      {
        date: "Feb.",
        description:
          "Launches Alpha version\nRaises 500 mil. KRW in seed funding",
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
      {
        date: "July",
        description:
          'Signs MOU with blockchain company "BLOCKO XYZ"\nSigns MOU with blockchain company "Krust Universe"',
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
      { date: "Apr.", description: "v.2.0.0 to be launched" },
      {
        date: "May",
        description:
          'Participated as the main technical partner at "2023 Focus New York", Chelsea Industrial, Manhattan\nFirst-ever 3D real-time Ad in New York\'s Times Square',
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        date: "June",
        description:
          "To participate in Artist Junhong Min's exhibition at Korean Culture Center, Paris",
      },
    ],
    planned: true,
  },
];

// Placeholder carousel images
const carouselImages = [
  "/images/timesquare/4.jpg",
  "/images/timesquare/2.png",
  "/images/timesquare/3.jpg",
  "/images/timesquare/9.jpg",
  "/images/timesquare/5.png",
  "/images/timesquare/6.jpg",
];

export function InvestorPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className={`min-h-screen bg-black text-white ${ubuntu.className}`}>
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
                <h3 className="text-2xl font-bold mb-4">
                  {yearGroup.year} {yearGroup.planned && "(Planned)"}
                </h3>
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

        <section>
          <h2 className="text-4xl font-bold mb-8">Events</h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <Image
                    src={image}
                    alt={`Featured image ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="mx-auto object-cover w-full h-[600px]"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="text-black" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="text-black" size={24} />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}