'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  UsersIcon, BuildingIcon, GlobeIcon, ArrowRightIcon } from "lucide-react"

export function ModernLandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>
      <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Alder Inc.</div>
          <Tabs defaultValue="home" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg rounded-full p-1">
              <TabsTrigger value="home" className="rounded-full data-[state=active]:bg-white/20">Home</TabsTrigger>
              <TabsTrigger value="studio" className="rounded-full data-[state=active]:bg-white/20">Adler Studio</TabsTrigger>
              <TabsTrigger value="about" className="rounded-full data-[state=active]:bg-white/20">About Us</TabsTrigger>
              <TabsTrigger value="investor" className="rounded-full data-[state=active]:bg-white/20">Investor</TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <Tabs defaultValue="home" className="w-full">
          <TabsContent value="home">
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Welcome to the Future of Virtual Spaces
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-blue-100">
                Every business starts with space, and the 3D Web offers a space opportunity that goes far beyond the physical.
                Occupy a space of infinite size, limitless visual impact, at an overwhelmingly low opportunity cost.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white rounded-full px-8 py-6">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6">
                  Watch Demo
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="studio">
            <div className="text-center space-y-8">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Adler Studio
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-blue-100">
                Create stunning virtual spaces for meetings, presentations, and more with our intuitive 3D design tools.
              </p>
              <form onSubmit={handleSubmit} className="flex justify-center space-x-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 backdrop-blur-lg text-white placeholder-white/50 rounded-full px-6"
                  required
                />
                <Button type="submit" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white rounded-full px-8">
                  Get Early Access
                </Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="text-center space-y-8">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">
                About Us
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-blue-100">
                Alder Inc. is at the forefront of the 3D Web revolution, creating innovative virtual spaces for businesses and individuals alike.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: CubeIcon, title: "Innovative Design", desc: "Cutting-edge 3D spaces" },
                  { icon: UsersIcon, title: "Collaboration", desc: "Seamless virtual meetings" },
                  { icon: BuildingIcon, title: "Scalability", desc: "Grow your virtual presence" },
                  { icon: GlobeIcon, title: "Global Reach", desc: "Connect worldwide" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4 hover:bg-white/20 transition-all duration-300">
                    <item.icon className="w-12 h-12 mx-auto text-blue-300" />
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="investor">
            <div className="text-center space-y-8">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
                Investor Relations
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-blue-100">
                Explore investment opportunities and access our latest financial reports and presentations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {[
                  { title: "Financial Reports", desc: "Q2 2023 Update" },
                  { title: "Investor Presentation", desc: "August 2023" },
                  { title: "Annual Report", desc: "Fiscal Year 2022" },
                  { title: "Earnings Call", desc: "Q2 2023 Recording" },
                ].map((item, index) => (
                  <Button key={index} variant="outline" className="bg-white/10 backdrop-blur-lg text-left hover:bg-white/20 rounded-xl p-6 h-auto">
                    <span className="flex flex-col">
                      <span className="text-lg font-semibold">{item.title}</span>
                      <span className="text-sm text-blue-200">{item.desc}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-12 border-t border-white/20 relative z-10">
        <div className="flex justify-between items-center">
          <div className="text-sm text-blue-200">&copy; 2023 Alder Inc. All rights reserved.</div>
          <div className="flex space-x-4">
            {["Twitter", "LinkedIn", "Facebook"].map((social, index) => (
              <a key={index} href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}