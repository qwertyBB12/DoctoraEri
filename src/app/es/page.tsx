import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PracticeOverview from '@/components/sections/PracticeOverview'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Governance from '@/components/sections/Governance'
import ClosingStatement from '@/components/sections/ClosingStatement'
import FadeInSection from '@/components/ui/FadeInSection'

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez | Urología Femenina CDMX',
  description: 'Especialista en urología femenina y medicina del piso pélvico. Tratamiento de incontinencia, prolapso pélvico y disfunciones urogenitales. Ex-Directora Médica Bayer México.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 landing-sections">
        <Hero />
        <FadeInSection><PracticeOverview /></FadeInSection>
        <FadeInSection><ServicesGrid /></FadeInSection>
        <FadeInSection><Governance /></FadeInSection>
        <FadeInSection><ClosingStatement /></FadeInSection>
      </main>
      <Footer />
    </>
  )
}
