import { Header} from "@/sections/Header"
import { LandingPage } from "@/components/landing-page";
import { InvestorPage } from "@/app/ir/page";
import { FeaturesPage} from "@/app/feature/page"


export default function Home() {
  return (
    <div>
      <Header />
      <LandingPage />
      <FeaturesPage />
      <InvestorPage />
    </div>
  );
}
