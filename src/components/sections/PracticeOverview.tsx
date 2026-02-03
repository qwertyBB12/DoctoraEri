export default function PracticeOverview() {
  return (
    <section className="section-spacing-lg section-gradient">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[2px] bg-oro" />
            <span className="text-sm font-medium tracking-wider text-taupe uppercase">
              Práctica Especializada
            </span>
            <div className="w-16 h-[2px] bg-oro" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-borgonia mb-8 leading-tight">
            Urología Femenina y<br />Medicina del Piso Pélvico
          </h2>
        </div>

        {/* Content blocks */}
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="relative pl-8 border-l-2 border-oro">
            <p className="text-xl md:text-2xl text-grafito leading-relaxed font-light">
              Urofemina ofrece atención especializada para condiciones que afectan
              la función urinaria, el piso pélvico y la salud sexual femenina.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm border border-perla">
            <p className="text-lg text-grafito leading-relaxed mb-6">
              La práctica se enfoca en evaluación diagnóstica completa y tratamientos
              basados en evidencia para:
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                'Incontinencia urinaria',
                'Prolapso de órganos pélvicos',
                'Disfunción del piso pélvico',
                'Dolor pélvico crónico',
                'Síndrome genitourinario de la menopausia',
                'Disfunción sexual femenina',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-oro mt-3 shrink-0" />
                  <span className="text-grafito leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-salvia">
            <p className="text-lg text-grafito leading-relaxed mb-6">
              Cada plan de tratamiento se desarrolla según estándares clínicos
              internacionales y se personaliza considerando diagnóstico, severidad,
              objetivos individuales y preferencias de la paciente.
            </p>
            <p className="text-lg text-grafito leading-relaxed mb-0">
              Los tratamientos incluyen opciones conservadoras, intervenciones
              intermedias y procedimientos quirúrgicos mínimamente invasivos cuando
              médicamente indicados.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8">
            <div className="text-center">
              <div className="text-3xl font-semibold text-borgonia mb-1">30+</div>
              <div className="text-sm text-taupe">Años de Experiencia Combinada</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-perla" />
            <div className="text-center">
              <div className="text-3xl font-semibold text-borgonia mb-1">1000+</div>
              <div className="text-sm text-taupe">Procedimientos Realizados</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-perla" />
            <div className="text-center">
              <div className="text-3xl font-semibold text-borgonia mb-1">95%</div>
              <div className="text-sm text-taupe">Satisfacción de Pacientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
