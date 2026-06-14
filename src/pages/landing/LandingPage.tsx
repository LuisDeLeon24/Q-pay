import LandingNav from '../../components/landing/LandingNav'
import HeroSection from '../../components/landing/HeroSection'
import StatsSection from '../../components/landing/StatsSection'
import BenefitsSection from '../../components/landing/BenefitsSection'
import HowItWorksSection from '../../components/landing/HowItWorksSection'
import AudienceSection from '../../components/landing/AudienceSection'
import FeaturesSection from '../../components/landing/FeaturesSection'
import FAQSection from '../../components/landing/FAQSection'
import FinalCTASection from '../../components/landing/FinalCTASection'
import LandingFooter from '../../components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AudienceSection />
      <FeaturesSection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
    </>
  )
}
