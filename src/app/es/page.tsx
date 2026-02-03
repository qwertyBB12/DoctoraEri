import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PracticeOverview from '@/components/sections/PracticeOverview'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Governance from '@/components/sections/Governance'
import ClosingStatement from '@/components/sections/ClosingStatement'
import FadeInSection from '@/components/ui/FadeInSection'

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez | Uroginecología CDMX',
  description: 'Uroginecóloga en Ciudad de México. Tratamiento de incontinencia urinaria, prolapso, vejiga hiperactiva, dolor pélvico e infecciones urinarias recurrentes. Instituto Nacional de Perinatología. World Trade Center CDMX.',
  openGraph: {
    title: 'Dra. Erika Torres Valdez | Urofemina',
    description: 'Uroginecóloga especialista en incontinencia urinaria, prolapso y salud pélvica femenina. World Trade Center, Ciudad de México.',
    locale: 'es_MX',
    images: [{ url: '/og/og-es.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/twitter-es.png'],
  },
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
