import { Header } from "@/sections/Header"
import LandingPageWrapper from '@/components/landing-page'
import FeaturePage from '@/components/featurepage'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('@/sections/Footer').then(mod => mod.Footer), { ssr: false })
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
      <DynamicFooter />
    </main>
  );
}