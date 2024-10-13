import React from 'react'
import Image from 'next/image'

export default function TimelineComponent() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-black">Adler's</span> <span className="text-[#FC2D7C]">Timeline</span>
      </h2>
      <div className="mb-8 flex justify-center  ">
        <div className="relative w-full bg-red">
          <Image
            src="/images/timeline.png"
            alt="Adler's Timeline"
            width={1080}
            height={720}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}