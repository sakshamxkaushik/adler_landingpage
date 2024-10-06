'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const countries = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
]

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center pt-8 pb-16">
      <div className="w-full max-w-2xl px-4 bg-white rounded-lg shadow-md p-8">
        <Image
          src="/placeholder.svg?height=40&width=100"
          width={100}
          height={40}
          alt="Adler Logo"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-pink-500 text-center mb-2">Contact</h1>
        <p className="text-center text-gray-600 mb-8">
          Got any questions about our platform? We're here to help.
          <br />
          Chat with our team who's available 24/7 worldwide.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Input id="firstName" placeholder="First Name" className="w-full" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input id="lastName" placeholder="Last Name" className="w-full" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@adler.cx" className="w-full" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-l-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={selectedCountry.code}
                  onChange={(e) => setSelectedCountry(countries.find(c => c.code === e.target.value) || countries[0])}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.dialCode})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              <Input 
                id="phone" 
                type="tel" 
                placeholder={`${selectedCountry.dialCode} (555) 000-000`} 
                className="flex-1 rounded-l-none" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Leave us your message"
              rows={5}
              className="w-full border border-gray-300 rounded-md focus:border-pink-500 focus:ring-pink-500 p-2"
            />
          </div>
          <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md">
            Send Message
          </Button>
        </form>
      </div>
      <div className="w-full max-w-2xl mt-8">
        <Image
          src="/placeholder.svg?height=300&width=800"
          width={800}
          height={300}
          alt="Map"
          className="w-full rounded-md"
        />
      </div>
    </div>
  )
}