"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconNewSection,
  IconNews,
  IconChartInfographic,
  IconBuildingSkyscraper,
  IconCoin,
  IconWorldWww,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Adler in Carrousel du Louvre, Paris",
    description:
      "Adler participated as the main technical partner at 2022 Focus Paris, held at 'Carrousel du Louvre'. We provided global artists with new and immersive VR spaces to showcase their artwork.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/images/news/paris.png"
          alt="VIVA TECH TOP 30"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconNewSection className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Adler secures 1.5B won investment, advances global 3D tech agenda",
    description:
      "Yurica Ovaerenue founder of 3D startup Adler, was selected as one of the 'Top 30 Female Entrepreneurs' by VivaTech, the largest startup event in Europe.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/images/features/2.gif"
          alt="1.5 B WON Funding"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconChartInfographic className="h-4 w-4 text-pink-500" />,
  },
  {
    title:
      "World's first 3D real-time Ad <Get Control> in Times Square NYC",
    description:
      "In Times Square, World's First 3D Real-Time Ad Takes Center Stage on Iconic New York Times Square Billboard",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/images/news/ny.png"
          alt="Tech Industry Layoffs"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconBuildingSkyscraper className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "CEO Yurika Ovarenue, VivaTech's Top 30 Female Entrepreneurs...",
    description:
      "Founder of 3D startup Adler, was selected as one of the 'Top 30 Female Entrepreneurs' by VivaTech, the largest startup event in Europe",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/images/news/viva.png"
          alt="/VIVA"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconCoin className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Adler 3D v4 Launches with Cutting-Edge Features at GITEX 2024",
    description:
      "Explore the latest version of Adler 3D with Studio XRML enhancements and Atom's innovative new assets, delivering a more immersive and accessible 3D creation experience. Visit us at Dubai Trade Center, Booth 119.4 during GITEX 2024.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/"
          alt="AI in Web Development"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconWorldWww className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Blankkkk",
    description: "afnadjsnfksadnf",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/images/news/viva.png"
          alt=""
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconNews className="h-4 w-4 text-pink-500" />,
  },
];

export default function News() {
  return (
    <div className="container mx-auto text-black px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Latest Adler</h1>
      <h2 className="text-3xl font-bold text-pink-500 mb-8">
        News and Insights
      </h2>

      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <div className="mt-8 text-center">
        <Link
          href="/news"
          className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          View All News
        </Link>
      </div>
    </div>
  );
}
