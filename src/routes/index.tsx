import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { HopeAISection } from '../components/HopeAISection'
import { WhyChooseSection } from '../components/WhyChooseSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { AboutSection } from '../components/AboutSection'
import { ApplySection } from '../components/ApplySection'
import { ContactSection } from '../components/ContactSection'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HopeAISection />
        <WhyChooseSection />
        <TestimonialsSection />
        <AboutSection />
        <ApplySection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
