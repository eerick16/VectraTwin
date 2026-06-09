import { FinalCtaSection } from '../components/landing/FinalCtaSection'
import { Footer } from '../components/landing/Footer'
import { HeroSection } from '../components/landing/HeroSection'
import { HowItWorksSection } from '../components/landing/HowItWorksSection'
import { Navbar } from '../components/landing/Navbar'
import { ProblemSection } from '../components/landing/ProblemSection'
import { TechnologySection } from '../components/landing/TechnologySection'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <TechnologySection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}