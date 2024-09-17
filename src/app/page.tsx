import { Header} from "@/sections/Header"
import { LandingPage } from "@/components/landing-page";
import { FeaturePage} from "@/components/featurepage"
import dynamic from 'next/dynamic'

const InvestorPage = dynamic(() => import('./ir/page'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />
      <FeaturePage />
      <InvestorPage />
    </main>
  );
}
