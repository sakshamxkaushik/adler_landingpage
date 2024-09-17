import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { Button } from "@/ui/button";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 ${ubuntu.className}`}>
      <div className="absolute inset-0 bg-[url('/glossy-overlay.png')] bg-cover bg-center opacity-50 pointer-events-none"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FC2D7C] to-[#FF69B4]">
          About Adler
        </h1>
        <section className="mb-16 bg-white bg-opacity-70 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-[#FC2D7C]">Company Overview</h2>
          <p className="text-lg mb-6">
            Adler Inc. was established in August 2021 with a vision to transform the way people interact in digital spaces. Our journey began with the development of a groundbreaking Three.js-based engine, which has since evolved into a comprehensive platform for creating immersive 3D experiences.
          </p>
          <p className="text-lg mb-6">
            From our humble beginnings to our current position as a leader in the virtual reality space, Adler has consistently pushed the boundaries of what's possible in digital interaction. Our rapid growth and innovative approach have attracted significant investment and partnerships with major players in the tech and blockchain industries.
          </p>
        </section>
        <section className="mb-16 bg-white bg-opacity-70 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-[#FC2D7C]">Our CEO</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/ceo-placeholder.jpg"
              alt="CEO Name"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Yurica</h3>
              <p className="text-lg mb-4">Founder & CEO</p>
              <p className="text-lg mb-6">
                Yurica  is the visionary founder and CEO of Adler Inc. With over 15 years of experience in the tech industry, John has been at the forefront of innovation in virtual and augmented reality. His passion for creating immersive digital experiences led to the founding of Adler in 2021.
              </p>
              <p className="text-lg">
                Under Yurica's leadership, Adler has grown from a small startup to a leading force in the 3D digital space industry. His commitment to pushing technological boundaries and fostering a culture of creativity has been instrumental in Adler's rapid growth and success.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-[#FC2D7C]">Our Team</h2>
          <p className="text-lg mb-6">
            At Adler, our success is driven by our talented and dedicated team. We're always looking for passionate individuals to join us in shaping the future of digital interactions.
          </p>
          <Link href="/hrpage">
            <Button className="bg-gradient-to-r from-[#FC2D7C] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#FC2D7C] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Learn More About Our HR Department
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}