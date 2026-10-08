import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LandingNav from '../../components/landing/LandingNav'
import HeroSection from '../../components/landing/HeroSection'
import ProblemSection from '../../components/landing/ProblemSection'
import HowItWorksSection from '../../components/landing/HowItWorksSection'
import ValuePropSection from '../../components/landing/ValuePropSection'
import SecuritySection from '../../components/landing/SecuritySection'
import TeamSection from '../../components/landing/TeamSection'
import ContactSection from '../../components/landing/ContactSection'
import LandingFooter from '../../components/landing/LandingFooter'

export default function LandingPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <LandingNav />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ValuePropSection />
      <SecuritySection />
      <TeamSection />
      <ContactSection />
      <LandingFooter />
    </>
  )
}
