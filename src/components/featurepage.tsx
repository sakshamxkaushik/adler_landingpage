"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ image, title, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src={image}
      alt={title}
      width={400}
      height={400}
      className="w-full h-auto"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-[#FC2D7C]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const FeatureSection: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ title, description, imageSrc, imageAlt }) => (
  <motion.div
    className="mb-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-4">
      {title.split(" ").map((word, index) =>
        index === 2 ? (
          <span key={index} className="text-[#FC2D7C]">
            {word}{" "}
          </span>
        ) : (
          word + " "
        )
      )}
    </h2>
    <p className="text-lg mb-8 max-w-2xl">{description}</p>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={600}
        className="w-full h-auto"
      />
    </div>
  </motion.div>
);

interface EnhancedImageCarouselProps {
  topImages: string[];
  bottomImages: string[];
}

const EnhancedImageCarousel: React.FC<EnhancedImageCarouselProps> = ({
  topImages,
  bottomImages,
}) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls1.start({
        x: [0, -100 * topImages.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
      controls2.start({
        x: [-100 * bottomImages.length, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls1.stop();
      controls2.stop();
    }
  }, [inView, controls1, controls2, topImages.length, bottomImages.length]);

  const renderImages = (images: string[], reverse: boolean = false) => (
    <motion.div
      className="flex"
      animate={reverse ? controls2 : controls1}
      style={{ width: `${images.length * 100}%` }}
    >
      {images.concat(images).map((src, idx) => (
        <div key={idx} className="w-1/4 flex-shrink-0 p-2">
          <Image
            src={src}
            alt={`Virtual Realm ${idx + 1}`}
            width={300}
            height={200}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      ))}
    </motion.div>
  );

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="mb-4">{renderImages(topImages)}</div>
      <div>{renderImages(bottomImages, true)}</div>
    </div>
  );
};

interface TimelineEventProps {
  date: string;
  description: string;
  isLeft: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  description,
  isLeft,
}) => (
  <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""} mb-8`}>
    <div className={`w-5/12 ${isLeft ? "text-right" : ""}`}>
      <div className="bg-white rounded-lg shadow-md p-4 inline-block">
        <p className="font-bold text-[#FC2D7C]">{date}</p>
        <p>{description}</p>
      </div>
    </div>
    <div className="w-2/12 flex justify-center">
      <div className="w-4 h-4 bg-[#FC2D7C] rounded-full"></div>
    </div>
    <div className="w-5/12"></div>
  </div>
);

const Timeline = () => (
  <div className="relative">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FC2D7C]"></div>
    <TimelineEvent
      date="Aug 2021"
      description="Adler Inc. is established"
      isLeft={true}
    />
    <TimelineEvent
      date="Sept 2021"
      description="Raises 390 mil. KRW from angel investor"
      isLeft={false}
    />
    <TimelineEvent
      date="Feb 2022"
      description="Launches Alpha version, raises 500 mil. KRW in seed funding"
      isLeft={true}
    />
    <TimelineEvent
      date="Apr 2022"
      description="Alpha ver. reaches MAU of 25,000, Develops proprietary Three.js-based engine"
      isLeft={false}
    />
    <TimelineEvent
      date="May 2022"
      description="Alpha ver. supports VR devices, Reaches 1,000 influencer users on Alpha ver."
      isLeft={true}
    />
    <TimelineEvent
      date="July 2022"
      description="Signs MOU with blockchain companies 'BLOCKO XYZ' and 'Knust Universe'"
      isLeft={false}
    />
    <TimelineEvent
      date="Aug 2022"
      description="Launches Beta version"
      isLeft={true}
    />
    <TimelineEvent
      date="Sept 2022"
      description="Participated as the main technical partner at '2022 Focus Paris', Carousel du Louvre. Raises cumulative investment of 2.7 bil. KRW"
      isLeft={false}
    />
    <TimelineEvent
      date="Apr 2023"
      description="v.2.0.0 to be launched"
      isLeft={true}
    />
    <TimelineEvent
      date="May 2023"
      description="Participated as the main technical partner at '2023 Focus New York', Chelsea Industrial, Manhattan. First-ever 3D real-time Ad in New York's Times Square"
      isLeft={false}
    />
    <TimelineEvent
      date="June 2023"
      description="Participate in Artist Junhong Min's exhibition at Korean Culture Center, Paris"
      isLeft={true}
    />
  </div>
);

export default function LandingPage() {
  const topCarouselImages = [
    "/images/timesquare/0.jpg",
    "/images/timesquare/1.jpg",
    "/images/timesquare/2.jpg",
    "/images/timesquare/3.jpg",
  ];

  const bottomCarouselImages = [
    "/images/timesquare/4.jpg",
    "/images/timesquare/5.jpg",
    "/images/timesquare/6.jpg",
    "/images/timesquare/7.jpg",
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="md:col-span-1">
            <Feature
              image="/images/features/room/2.png"
              title="Search Using Keywords"
              description="Create your own space with a preset theme and your own images. Explore other spaces with infinite scrolling."
            />
          </div>
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-black">Live Reality Through Your</span>{" "}
              <span className="text-[#FC2D7C]">Virtual Universe</span>
            </h2>
            <p className="text-lg mb-8">
              Craft a space that reflects your identity with themed presets and
              personal images. Dive into an endless flow of unique,
              ever-evolving 3D spaces.
            </p>
            <Feature
              image="/images/features/room/3.png"
              title="Adler Engine 1 sec Load Time"
              description="Create your own space with a preset theme and your own images. Explore other spaces with infinite scrolling."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="md:col-span-1">
            <Feature
              image="/images/features/room/2.png"
              title="3D Feed At Your Fingertips"
              description="Create your own space with a preset theme and your own images. Explore other spaces with infinite scrolling."
            />
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <Button className="bg-[#FC2D7C] hover:bg-[#FC2D7C]/80 text-white text-lg py-3 px-8 rounded-full transition-colors duration-300">
              Explore Adler Now
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-20">
          <p className="text-xl mb-4">
            "The meaning of life is to be understood as helping, to be useful,
            to play a part in making others happy."
          </p>
          <p className="text-lg font-semibold">Alfred Adler</p>
        </div>

        <FeatureSection
          title="Infinite Dimensions Your Gateway to the 3D Web"
          description="Step into Virtual Reality where the boundaries of reality and imagination merge. Our platform makes creating, exploring, and interacting with 3D web environments as simple as browsing the 2D web. 
          Accessible from anywhere and designed for everyone."
          imageSrc="/images/features/device/device.png"
          imageAlt="Adler platform on laptop and smartphone"
        />

        <FeatureSection
          title="XRML Language for Building 3D"
          description="With XRML, the complex world of 3D design becomes approachable. Developers and creators can build interactive, real-time 3D environments directly in browsers, opening up new possibilities for education, entertainment, business, and beyond."
          imageSrc="/images/features/device/xrml.png"
          imageAlt="XRML code example"
        />

        <FeatureSection
          title="Design Your Reality with Adler"
          description="At Adler, we empower you to design your own reality. Imagine a world where your dreams can take shape, where you can build, create, and experience life on your terms. With our custom-made models, crafting your ideal environment has never been easier."
          imageSrc="/images/features/last/image.png"
          imageAlt="XRML code example"
        />

        <div className="m-0">
          <EnhancedImageCarousel
            topImages={topCarouselImages}
            bottomImages={bottomCarouselImages}
          />
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Adler's <span className="text-[#FC2D7C]">Timeline</span>
          </h2>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
