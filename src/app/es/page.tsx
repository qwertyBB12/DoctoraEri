import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PracticeOverview from '@/components/sections/PracticeOverview'
import ServicesGrid from '@/components/sections/ServicesGrid'

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez | Urología Femenina CDMX',
  description: 'Especialista en urología femenina y medicina del piso pélvico. Tratamiento de incontinencia, prolapso pélvico y disfunciones urogenitales. Ex-Directora Médica Bayer México.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeOverview />
        <ServicesGrid />

        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
          <h2 className="mb-6">Primera Consulta</h2>
          <p className="text-lg text-grafito mb-8 max-w-2xl mx-auto">
            La consulta inicial incluye historia clínica detallada, examen físico cuando
            apropiado, y desarrollo de plan de tratamiento personalizado.
          </p>
          <a
            href="/es/contacto"
            className="inline-block px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90"
          >
            Solicitar Cita
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
