"use client"

import React, { useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Entertainment from '../assets/svgd/Entertainment';
import Education from '../assets/svgd/Education';
import Exhibition from '../assets/svgd/Exhibition';
import Funeral from '../assets/svgd/Funeral';
import Gaming from '../assets/svgd/Gaming';
import Healthcare from '../assets/svgd/Healthcare';
import Real_estate from '../assets/svgd/Real_estate';
import Showrooms from '../assets/svgd/Showrooms';
import Wedding from '../assets/svgd/Wedding';

interface UseCase {
  title: string;
  icon: React.FC;
  description: string;
}

const useCases: UseCase[] = [
  {
    title: "Gaming",
    icon: Gaming,
    description: "Create immersive virtual environments where users can explore and interact, enhancing gaming or social experiences within Adler's 3D spaces.",
  },
  {
    title: "Real Estate",
    icon: Real_estate,

    description: "By using Adler 3D spaces, real estate agents can offer virtual tours of homes and offices, allowing potential buyers or renters to explore properties remotely.",
  },
  {
    title: "Education",
    icon: Education,

    description: "Adler helps educators build virtual classrooms and practical training spaces, where students and professionals can engage lessons, collaborate, and practice real-world skills.",
  },
  {
    title: "Exhibition",
    icon: Exhibition,

    description: "Using Adler, organizers can design virtual exhibitions where visitors can explore artworks, artifacts, or displays from anywhere in the world.",
  },
  {
    title: "Show Rooms",
    icon: Showrooms,

    description: "With Adler, develop virtual showrooms where businesses can display products in an interactive 3D setting, allowing customers to view and engage with items.",
  },
  {
    title: "Entertainment",
    icon: Entertainment,
    description: "Adler can be used to develop virtual concerts, Karaoke, or performance spaces, offering audiences unique, immersive experiences from anywhere in the world.",
  },
  {
    title: "Funeral",
    icon: Funeral,

    description: "Using Adler create virtual environments where family and friends can gather for memorial services, allowing those who cannot attend in person to participate.",
  },
  {
    title: "Wedding",
    icon: Wedding,

    description: "With Adler, you can host virtual weddings that allow family and friends to join from anywhere. Everyone can share in the special moments.",
  },
  {
    title: "Health Care",
    icon: Healthcare,
    description: "By using Adler, you can create 3D environments that improve medical training, patient education, and rehabilitation. Our technology helps to provide better care for patients.",
  },
]

const UseCaseCard: React.FC<{ useCase: UseCase; index: number }> = ({ useCase, index }) => {
  const Icon = useCase.icon
  return (
    <motion.div
      className="flex-shrink-0 w-[437px] h-[437px] bg-gradient-to-b from-transparent to-pink-50 rounded-xl shadow-lg p-6 m-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="mb-8">
        <Icon />
      </div>
      <h3 className="text-4xl font-semibold text-pink-500 mb-4 font-['Pretendard']">{useCase.title}</h3>
      <p className="text-lg text-gray-800 font-['Pretendard']">{useCase.description}</p>
    </motion.div>
  )
}

export function UseCasesCarousel() {
  const [isDragging, setIsDragging] = React.useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const handleDragStart = () => setIsDragging(true)
  const handleDragEnd = () => {
    setIsDragging(false)
    resumeAutoScroll() // Resume auto-scroll after dragging ends
  }

  const duplicatedUseCases = [...useCases, ...useCases]

  useEffect(() => {
    resumeAutoScroll() // Start auto-scroll when the component mounts
  }, [])

  const resumeAutoScroll = () => {
    controls.start({
      x: [-437 * useCases.length, 0],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    })
  }

  return (
    <div className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-12 font-['Pretendard']">
          <span className="text-pink-500">Adler's</span> Use Cases
        </h2>
        <motion.div
          ref={carouselRef}
          className="flex overflow-visible"
          style={{ x }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={carouselRef}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls} // Keep animation running
          >
            {duplicatedUseCases.map((useCase, index) => (
              <UseCaseCard key={`${useCase.title}-${index}`} useCase={useCase} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
