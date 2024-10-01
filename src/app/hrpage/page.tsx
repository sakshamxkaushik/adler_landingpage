'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Briefcase, GraduationCap, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/sections/Header'
import Footer from '@/sections/Footer' 
import CultureImage from '@/assets/images/memoji-computer.png'

interface JobListingProps {
  title: string;
  department: string;
  location: string;
}

const JobListing: React.FC<JobListingProps> = ({ title, department, location }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-1">{department}</p>
    <p className="text-gray-500 mb-4">{location}</p>
    <Button className="bg-[#FC2D7C] hover:bg-[#E0256D] text-white rounded-full">
      Apply Now <ArrowRight className="ml-2" size={16} />
    </Button>
  </div>
)

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <Icon className="text-[#FC2D7C] mx-auto mb-4" size={40} />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
)

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
        
    <Header />

      <main>
        <section className="py-20 bg-gradient-to-r from-[#FFF5F8] to-[#FFF0F5] text-[#FC2D7C]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Join the Adler Team</h1>
            <p className="text-xl mb-8 text-gray-600">Shape the future of 3D digital spaces and be part of something extraordinary</p>
            <Button className="bg-[#FC2D7C] text-white hover:bg-[#E0256D] rounded-full" >
              View Open Positions <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="culture" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-4">
                  At Adler, we're passionate about pushing the boundaries of what's possible in 3D digital spaces. Our culture is built on creativity, collaboration, and a relentless pursuit of excellence.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe in empowering our team members to think big, take risks, and make a real impact. Join us in shaping the future of digital interaction and expression.
                </p>
                <Button className="bg-[#FC2D7C] hover:bg-[#E0256D] text-white rounded-full">
                  Learn More About Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={CultureImage}
                  alt="Adler Culture"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-[#FFF5F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Working at Adler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={Users}
                title="Collaborative Environment"
                description="Work with a diverse team of talented individuals from around the world."
              />
              <BenefitCard
                icon={Heart}
                title="Health & Wellness"
                description="Comprehensive health insurance and wellness programs to keep you at your best."
              />
              <BenefitCard
                icon={Briefcase}
                title="Flexible Work"
                description="Remote-friendly policies and flexible hours to suit your lifestyle."
              />
              <BenefitCard
                icon={GraduationCap}
                title="Learning & Development"
                description="Continuous learning opportunities and professional development support."
              />
            </div>
          </div>
        </section>

        <section id="openings" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Current Job Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <JobListing title="3D Designer" department="Design Team" location="Remote" />
              <JobListing title="Frontend Developer" department="Engineering" location="New York, NY" />
              <JobListing title="Product Manager" department="Product" location="San Francisco, CA" />
              <JobListing title="Marketing Specialist" department="Marketing" location="Remote" />
              <JobListing title="Customer Success Manager" department="Customer Support" location="London, UK" />
              <JobListing title="Data Scientist" department="Analytics" location="Berlin, Germany" />
            </div>
          </div>
        </section>
      </main>

      {/* Add the custom Footer component from the sections folder */}
      <Footer />
    </div>
  )
}