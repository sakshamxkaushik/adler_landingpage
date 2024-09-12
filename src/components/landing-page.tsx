"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Palette,
  Box,
  Share2,
  FileText,
  Bell,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Logo from "./logo.png";
import Timesquare1 from "../assets/timesquare/1.jpg";
import Timesquare2 from "../assets/timesquare/2.png";
import Timesquare3 from "../assets/timesquare/3.jpg";




const heroSlides = [
  {
    title: "Welcome to Adler",
    description: "Create Immersive 3D Digital Spaces",
    image: Timesquare1,
  }, // Corrected },
  {
    title: "Revolutionize Your Digital Experience",
    description: "Design, Build, and Share in 3D",
    image: Timesquare2, // Remove curly braces
  },
  {
    title: "Join the 3D Revolution",
    description: "Transform Your Ideas into Reality",
    image: Timesquare3, // No curly braces
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <Link href="https://www.adler3d.com/ko/accounts/login">
                <Button className="bg-[#FC2D7C] hover:bg-[#E0256D] text-white">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="text-gray-800" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="text-gray-800" size={24} />
      </button>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ElementType; // React.ElementType can be used for a component or an element
  title: string;
  description: string;
  link?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  link = "#",
}) => (
  <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 border border-gray-200">
    <div className="w-16 h-16 bg-[#FC2D7C] rounded-full flex items-center justify-center mb-4">
      <Icon className="text-white" size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={link} className="text-[#FC2D7C] hover:underline">
      Learn More
    </Link>
  </div>
);

export function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src={Logo} alt="Adler Logo" width={120} height={40} />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#FC2D7C]"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#ir" className="text-gray-600 hover:text-[#FC2D7C]">
                  IR
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#FC2D7C]">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#FC2D7C]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://adler3d.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FC2D7C]"
                >
                  Adler 3D
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroSlider />
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Unleash Your Creativity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Palette}
                title="Design"
                description="Create stunning 3D designs with our intuitive tools."
                link="#"
              />
              <FeatureCard
                icon={Box}
                title="Build"
                description="Construct your virtual space with powerful building blocks."
                link="#"
              />
              <FeatureCard
                icon={Share2}
                title="Share"
                description="Invite others to explore your creation."
                link="#"
              />
            </div>
          </div>
        </section>
        <section id="ir" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Investor Relations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={FileText}
                title="IR Information"
                description="Access our latest financial reports and investor information."
                link="#"
              />
              <FeatureCard
                icon={Bell}
                title="Announcements"
                description="Stay updated with our latest company announcements."
                link="#"
              />
              <FeatureCard
                icon={Download}
                title="Request IR Material"
                description="Download or request additional investor relations materials."
                link="#"
              />
            </div>
          </div>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Adler is revolutionizing the way we interact with digital spaces.
              Our mission is to empower creators and businesses to build
              immersive 3D experiences that captivate and inspire.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#FC2D7C]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FC2D7C]">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FC2D7C]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FC2D7C]">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@adler.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Address</h3>
              <p>123 Adler Street</p>
              <p>Tech City, IN 12345</p>
              <p>United States</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Adler. All rights reserved.</p>
            <div className="mt-4">
              <Link
                href="#"
                className="mx-2 hover:underline hover:text-[#FC2D7C]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="mx-2 hover:underline hover:text-[#FC2D7C]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
