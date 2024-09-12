import { LandingPage } from "@/components/landing-page";
import { HrPage } from "@/components/hr-page";
import { Header } from "@/sections/Header";
import { IR_page } from "@/sections/IR_page";
import { HeroSection } from "@/sections/Hero";



export default function Home() {
  return (
    <div>
  
      <LandingPage />
      <HrPage />
      <Header />
      <HeroSection />
      <IR_page />
    </div>
  );
}
