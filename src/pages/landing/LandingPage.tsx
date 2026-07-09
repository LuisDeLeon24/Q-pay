import LandingNav from '../../components/landing/LandingNav'
import HeroSection from '../../components/landing/HeroSection'
import ValuePropSection from '../../components/landing/ValuePropSection'
import FeaturesSection from '../../components/landing/FeaturesSection'
import HowItWorksSection from '../../components/landing/HowItWorksSection'
import SecuritySection from '../../components/landing/SecuritySection'
import LandingFooter from '../../components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <HeroSection />
      <ValuePropSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <LandingFooter />
    </>
  )
}
