export default function PracticeOverview() {
  const values = [
    {
      title: 'La Escuchamos Primero',
      body: 'Cada consulta comienza escuchando su historia completa — sus síntomas, cuánto tiempo lleva con ellos, cómo afectan su vida. Solo así podemos llegar al diagnóstico correcto.',
    },
    {
      title: 'Diagnóstico Preciso',
      body: 'Utilizamos estudios urodinámicos y protocolos internacionales para identificar exactamente qué está causando sus síntomas. Un buen tratamiento empieza con un buen diagnóstico.',
    },
    {
      title: 'Tratamiento a Su Medida',
      body: 'No todas las pacientes necesitan cirugía. Exploramos primero opciones conservadoras como fisioterapia y medicamentos. Si la cirugía es necesaria, usamos técnicas mínimamente invasivas.',
    },
  ]

  return (
    <section className="px-6 py-24 md:py-[140px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
          Cómo Trabajamos
        </p>
        <h2 className="text-borgonia mb-6 max-w-3xl">
          Atención médica que pone a la paciente primero.
        </h2>
        <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
          Muchas mujeres pasan años con síntomas que afectan su confianza y calidad de vida,
          sin saber que hay tratamientos efectivos. Mi compromiso es brindar un espacio
          donde pueda hablar abiertamente, recibir un diagnóstico claro, y encontrar
          la solución que mejor se adapte a su vida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {values.map((v, i) => (
            <div key={i} className="bg-borgonia-light rounded-[12px] p-10">
              <div className="w-12 h-12 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                <span className="text-borgonia font-extrabold text-lg">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="text-grafito leading-[1.7] text-[15px]">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
