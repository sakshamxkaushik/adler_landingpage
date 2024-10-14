'use client'

import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center pt-8 pb-16">
      <div className="w-full max-w-2xl px-4 bg-white rounded-lg shadow-md p-8">
        <Image
          src="/images/logo.png"
          width={100}
          height={40}
          alt="Adler Logo"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-pink-500 text-center mb-2">Contact</h1>
        <p className="text-center text-gray-600 mb-8">
          Got any questions about our platform? We're here to help.
          <br />
          Our team is available 24/7 worldwide.
        </p>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">General Inquiries</h2>
            <a href="mailto:help@adler.cx" className="text-pink-500 hover:text-pink-600 text-lg">
              help@adler.cx
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Strategic Partnerships</h2>
            <a href="mailto:strategy@adler.cx" className="text-pink-500 hover:text-pink-600 text-lg">
              strategy@adler.cx
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}