import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactFormES from '@/components/forms/ContactFormES'

export const metadata = {
  title: 'Contacto | Agendar Consulta con Dra. Erika Torres',
  description: 'Solicite una consulta con Dra. Erika Torres Valdez. Ubicación en World Trade Center, Ciudad de México.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-8">Contacto</h1>
            <p className="text-center text-lg text-grafito mb-12 max-w-2xl mx-auto">
              Para solicitar una consulta, complete el formulario a continuación o
              contáctenos directamente por teléfono o WhatsApp.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-6 text-borgonia">Información de Contacto</h3>
                <div className="space-y-6 text-grafito">
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Ubicación</h4>
                    <p className="text-sm">
                      World Trade Center México City<br />
                      Montecito 38, Piso 12<br />
                      Nápoles, Benito Juárez<br />
                      03810 Ciudad de México, CDMX
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Horario</h4>
                    <p className="text-sm">
                      Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: Solo con cita previa
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Contacto</h4>
                    <p className="text-sm">
                      Teléfono: 55 6465 5364<br />
                      WhatsApp: 55 6465 5364
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Idiomas</h4>
                    <p className="text-sm">Español, English</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-borgonia">Solicitud de Consulta</h3>
                <ContactFormES />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
