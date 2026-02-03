import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white border-b border-perla">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">

          {/* Patient-focused opening */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-oro" />
              <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                Uroginecología · Ciudad de México
              </span>
            </div>

            <h1 className="text-borgonia mb-6">
              No tiene que vivir así.
            </h1>

            <p className="text-xl text-grafito leading-relaxed max-w-2xl mb-8">
              Si experimenta escapes de orina al reír, toser o hacer ejercicio;
              sensación de bulto o presión vaginal; urgencia repentina de ir al baño;
              o molestias íntimas que afectan su día a día — <strong className="text-borgonia">hay solución,
              y no está sola.</strong>
            </p>

            <p className="text-lg text-grafito/80 leading-relaxed max-w-2xl">
              Estos síntomas son más comunes de lo que se habla, y con el diagnóstico
              y tratamiento adecuados, la mayoría de las pacientes recuperan su calidad de vida.
            </p>
          </div>

          {/* Doctor introduction with photo */}
          <div className="bg-borgonia-light rounded-[12px] p-8 md:p-10 mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-oro ring-offset-4 ring-offset-borgonia-light">
                  <Image
                    src="/images/team/dra-erika-torres.jpg"
                    alt="Dra. Erika Torres Valdez"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-borgonia mb-3">
                  Dra. Erika Torres Valdez
                </h2>
                <p className="text-grafito leading-relaxed mb-4">
                  <strong className="text-borgonia">Uroginecóloga</strong> — especialista en el diagnóstico
                  y tratamiento de condiciones del piso pélvico femenino: incontinencia urinaria,
                  prolapso, dolor pélvico y salud íntima.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-taupe">
                  <span>Instituto Nacional de Perinatología</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Ex-Directora Médica, Bayer</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="/es/contacto"
              className="inline-block px-10 py-4 bg-borgonia text-white font-semibold text-base rounded-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar Consulta
            </a>
            <div className="text-sm text-taupe">
              <p className="font-medium">World Trade Center, CDMX</p>
              <p>Consultas en español e inglés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
