import { Landing } from "@/sections/modern-landing-page";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { IR_page } from "@/sections/IR_page";



export default function Home() {
  return (
    <div>
      <Landing />
      <Header />
      <HeroSection />
      <IR_page />
    </div>
  );
}
