import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Globe, Instagram, Youtube, Linkedin, } from "lucide-react";

export default function Component() {
  const links = [
    { name: "Explore Adler3D Technology", url: "https://adler.cx/" },
    { name: "3D Creator Studio", url: "https://adler.cx/" },
    { name: "NYC Times Square 3D Ad", url: "https://adler.cx/" },
    { name: "IR Material", url: "https://adler.cx/en" },
    { name: "3D Creator Competition", url: "https://adler.cx/en" },
  ];

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

          {/* <div className="w-full space-y-3">
            {links.map((link, index) => (
              <Button
                key={index}
                className="w-full bg-[#1D1D1D] hover:bg-[#FC2D7C] text-white transition-colors duration-300"
              >
                {link.name}
              </Button>
            ))}
          </div> */}
<div className="w-full space-y-3">
  {links.map((link, index) => (
    <a
      key={index}
      href={link.url}
      className="w-full"
    >
      <Button className="w-full bg-[#1D1D1D] hover:bg-[#FC2D7C] text-white transition-colors duration-300 mb-3"> {/* Add margin-bottom here */}
        {link.name}
      </Button>
    </a>
  ))}
</div>


          <div className="flex justify-center space-x-5 mt-8">
  
          <a
    href="https://example.com" // Replace with your actual website URL
    target="_blank"
    rel="noopener noreferrer"
  >
    <Globe className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
  </a>

  <a
    href="https://twitter.com/adler3d"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
  </a>
  <a
    href="https://instagram.com/adler3d"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
  </a>
  <a
    href="https://youtube.com/adler3d"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
  </a>
  <a
    href="https://linkedin.com/company/adler3d"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-6 h-6 text-[#1D1D1D] hover:text-[#FC2D7C] cursor-pointer" />
  </a>
  
</div>

        </CardContent>
      </Card>
    </div>
  );
}