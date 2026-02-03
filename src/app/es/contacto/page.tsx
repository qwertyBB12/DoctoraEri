import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
                      World Trade Center<br />
                      Montecito 38, Piso 16, Oficina 36<br />
                      Nápoles, Benito Juárez<br />
                      Ciudad de México, 03810
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
                      Teléfono: +52 55 1234 5678<br />
                      WhatsApp: +52 55 1234 5678<br />
                      Email: contacto@doctoraeri.com
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
                <form className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-grafito mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-grafito mb-2">
                      Edad *
                    </label>
                    <input
                      type="number"
                      id="edad"
                      required
                      min={18}
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-grafito mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-grafito mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      required
                      placeholder="+52 55 XXXX XXXX"
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-grafito mb-2">
                      Motivo de consulta *
                    </label>
                    <textarea
                      id="motivo"
                      required
                      rows={4}
                      placeholder="Describa brevemente el motivo de su consulta. No incluya información médica detallada."
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90"
                  >
                    Enviar Solicitud
                  </button>
                  <p className="text-xs text-taupe">
                    * Campos requeridos. Nos pondremos en contacto en un plazo de 24-48 horas hábiles.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
