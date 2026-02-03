export default function ClosingStatement() {
  return (
    <section className="relative overflow-hidden bg-grafito px-6 py-[100px] md:py-[140px] compliance-dark">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-8">
          Primera Consulta
        </p>

        <h2 className="text-white mb-8 max-w-3xl mx-auto">
          El primer paso es una conversación.
        </h2>

        <p className="text-lg text-perla leading-[1.7] max-w-[65ch] mx-auto mb-12">
          La consulta inicial incluye historia clínica detallada, evaluación
          diagnóstica cuando apropiado, y desarrollo de un plan de tratamiento
          personalizado basado en sus síntomas, objetivos y preferencias.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/es/contacto"
            className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-salvia text-white hover:bg-borgonia"
          >
            Agendar Consulta
          </a>
          <a
            href="/es/sobre-dra-erika"
            className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 text-white border border-white/40 hover:bg-white/10"
          >
            Conocer a Dra. Erika
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/10 text-[13px] text-perla/60">
          <span>World Trade Center, CDMX</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>Lunes a Viernes · 9:00–18:00</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>Español · English</span>
        </div>
      </div>
    </section>
  )
}
