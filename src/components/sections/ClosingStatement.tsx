export default function ClosingStatement() {
  return (
    <section className="bg-borgonia px-6 py-[100px] md:py-[140px]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-8">
          Dé el Primer Paso
        </p>

        <h2 className="text-white mb-8 max-w-3xl mx-auto">
          No tiene que seguir viviendo con estos síntomas.
        </h2>

        <p className="text-lg text-white/80 leading-[1.7] max-w-[65ch] mx-auto mb-12">
          La consulta inicial es una conversación confidencial donde hablaremos
          de lo que está experimentando, responderemos sus preguntas, y le explicaremos
          las opciones de tratamiento. Sin presiones, sin juicios — solo información
          clara para que pueda tomar la mejor decisión para su salud.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/es/contacto"
            className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-white text-borgonia hover:bg-oro hover:text-white"
          >
            Agendar Consulta
          </a>
          <a
            href="/es/preguntas-frecuentes"
            className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 text-white border-2 border-white/60 hover:bg-white hover:text-borgonia"
          >
            Preguntas Frecuentes
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/20 text-[13px] text-white/60">
          <span>World Trade Center, CDMX</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Lunes a Viernes · 9:00–18:00</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Español · English</span>
        </div>
      </div>
    </section>
  )
}
