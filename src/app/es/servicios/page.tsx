import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesGrid from '@/components/sections/ServicesGrid'

export const metadata = {
  title: 'Servicios | Urofemina - Dra. Erika Torres Valdez',
  description: 'Servicios especializados en urología femenina: incontinencia urinaria, prolapso pélvico, disfunción del piso pélvico, salud sexual y cirugía mínimamente invasiva.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6">Servicios Especializados</h1>
            <p className="text-lg text-grafito mx-auto">
              Atención integral en urología femenina y medicina del piso pélvico,
              con protocolos basados en evidencia y enfoque personalizado para cada paciente.
            </p>
          </div>
        </section>
        <ServicesGrid />
      </main>
      <Footer />
    </>
  )
}
