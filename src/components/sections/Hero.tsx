import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 md:py-40 lg:py-48">
      {/* Subtle abstract element — connectivity lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-borgonia/[0.02] blur-3xl" />
        <div className="absolute -bottom-[300px] -left-[200px] w-[800px] h-[800px] rounded-full bg-salvia/[0.03] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-oro/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-8">
          Urología Femenina &amp; Piso Pélvico · Ciudad de México
        </p>

        {/* Headline — split color for authority */}
        <h1 className="mb-8">
          <span className="block text-borgonia">
            Medicina Que Transforma.
          </span>
          <span className="block text-salvia">
            Cuidado Que Trasciende.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-grafito leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          Dra. Erika Torres Valdez — Ex-Directora Médica de Salud Femenina, Bayer México.
          Especialista certificada en urología femenina y cirugía reconstructiva pélvica.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/es/contacto" variant="primary">
            Agendar Consulta
          </Button>
          <Button href="/es/sobre-dra-erika" variant="outline">
            Conocer a Dra. Erika
          </Button>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-8 border-t border-perla/60">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-bold uppercase tracking-[0.1em] text-taupe">
            <span>Consejo Mexicano de Urología</span>
            <span className="hidden sm:inline text-perla">·</span>
            <span>IUGA</span>
            <span className="hidden sm:inline text-perla">·</span>
            <span>AUGS</span>
            <span className="hidden sm:inline text-perla">·</span>
            <span>World Trade Center CDMX</span>
          </div>
        </div>
      </div>
    </section>
  )
}
