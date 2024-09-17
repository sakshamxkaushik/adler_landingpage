import { Header} from "@/sections/Header"
import LandingPageWrapper from '@/components/landing-page-wrapper'
import { FeaturePage} from "@/components/featurepage"
import dynamic from 'next/dynamic'

const InvestorPage = dynamic(() => import('./ir/page'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Header />
      <section id="landing">
       <LandingPageWrapper />
      </section>
      <section id="features">
        <FeaturePage />
      </section>
      <section id="investor">
        <InvestorPage />
      </section>
    </main>
  );
}
