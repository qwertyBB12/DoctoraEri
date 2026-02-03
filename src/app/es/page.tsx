import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PracticeOverview from '@/components/sections/PracticeOverview'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez | Urología Femenina CDMX',
  description: 'Especialista en urología femenina y medicina del piso pélvico. Tratamiento de incontinencia, prolapso pélvico y disfunciones urogenitales. Ex-Directora Médica Bayer México.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 lg:pt-24">
        <Hero />
        <PracticeOverview />
        <ServicesGrid />

        {/* Contact CTA Section */}
        <section className="section-spacing section-crema">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-[2px] bg-oro" />
              <span className="text-sm font-medium tracking-wider text-taupe uppercase">
                Primera Consulta
              </span>
              <div className="w-16 h-[2px] bg-oro" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-borgonia mb-8">
              Agende su Evaluación Inicial
            </h2>

            <p className="text-xl text-grafito leading-relaxed mb-12 max-w-3xl mx-auto">
              La consulta inicial incluye historia clínica detallada, examen físico cuando
              apropiado, y desarrollo de plan de tratamiento personalizado basado en sus
              síntomas y objetivos individuales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/es/contacto" size="lg">
                Solicitar Cita
              </Button>
              <Button href="/es/sobre-dra-erika" variant="outline" size="lg">
                Conocer a Dra. Erika
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-perla">
              <div className="flex items-center gap-2 text-sm text-taupe">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Consultas Presenciales</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Respuesta en 24-48 horas</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
