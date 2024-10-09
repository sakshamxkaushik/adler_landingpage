import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Component() {
  const links = [
    "Explore Adler3D Technology",
    "3D Creator Studio",
    "NYC Times Square 3D Ad",
    "Adler in Focus Paris",
    "Join Adler3D Team",
    "3D Creator Competition"
  ]

  return (
    <div className="min-h-screen bg-[#1D1D1D] p-4 sm:p-6 md:p-8 font-['Pretendard']">
      <Card className="max-w-md mx-auto bg-[#FFFFFF] shadow-lg overflow-hidden">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="w-26 h-28 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Adler3D Logo"
              width={80}
              height={80}
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#1D1D1D] mb-2">ADLER3D</h1>
          <p className="text-[#FC2D7C] mb-6">@adler3d</p>
          
          <div className="w-full space-y-3">
            {links.map((link, index) => (
              <Button
                key={index}
                className="w-full bg-[#1D1D1D] hover:bg-[#FC2D7C] text-white transition-colors duration-300"
              >
                {link}
              </Button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Facebook className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
            <Twitter className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
            <Instagram className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
            <Youtube className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
            <Linkedin className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}