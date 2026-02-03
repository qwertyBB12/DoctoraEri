export default function PracticeOverview() {
  const values = [
    {
      title: 'Diagnóstico de Precisión',
      body: 'Evaluación clínica integral que combina historia detallada, estudios urodinámicos avanzados y protocolos diagnósticos internacionales para identificar la causa exacta de cada condición.',
    },
    {
      title: 'Evidencia Clínica',
      body: 'Cada decisión terapéutica se fundamenta en literatura médica actual, guías de práctica clínica de IUGA/AUGS, y estándares del Consejo Mexicano de Urología.',
    },
    {
      title: 'Tratamiento Individualizado',
      body: 'Planes personalizados que consideran severidad, objetivos, preferencias y contexto de vida de cada paciente — desde opciones conservadoras hasta cirugía reconstructiva.',
    },
  ]

  return (
    <section className="px-6 py-24 md:py-[140px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
          Filosofía de Práctica
        </p>
        <h2 className="text-borgonia mb-6 max-w-3xl">
          Urología femenina con rigor científico y sensibilidad clínica.
        </h2>
        <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
          La práctica integra formación quirúrgica especializada con experiencia
          en dirección médica farmacéutica — una perspectiva única que conecta
          innovación terapéutica con práctica clínica directa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-borgonia-light rounded-[12px] p-10"
            >
              <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="text-grafito leading-[1.7] text-[15px]">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
