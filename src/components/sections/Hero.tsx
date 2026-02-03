import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white border-b border-perla">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-start justify-between mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-oro" />
                <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                  Urología Femenina &amp; Piso Pélvico · Ciudad de México
                </span>
              </div>

              <h1 className="text-borgonia mb-8">
                Dra. Erika Torres Valdez
              </h1>
            </div>

            <div className="hidden lg:block shrink-0 ml-8">
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-oro ring-offset-4">
                <Image
                  src="/images/team/dra-erika-torres.jpg"
                  alt="Dra. Erika Torres Valdez"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 mb-12 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
              <p className="text-lg text-grafito leading-relaxed">
                <strong className="font-semibold text-borgonia">Ex-Directora Médica de Salud Femenina</strong>, Bayer México
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
              <p className="text-lg text-grafito leading-relaxed">
                <strong className="font-semibold text-borgonia">Certificada por el Consejo Mexicano de Urología</strong>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
              <p className="text-lg text-grafito leading-relaxed">
                Especialista en urología femenina y cirugía reconstructiva pélvica
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
              <p className="text-lg text-grafito leading-relaxed">
                <strong className="font-semibold text-borgonia">Urofemina</strong> · World Trade Center, Ciudad de México
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/es/contacto"
              className="inline-block px-10 py-4 bg-borgonia text-white font-semibold text-base rounded-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar Consulta
            </a>
            <div className="text-sm text-taupe">
              <p className="font-medium">Consultas Presenciales</p>
              <p>Español · English</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
