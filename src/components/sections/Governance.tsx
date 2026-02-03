export default function Governance() {
  const credentials = [
    {
      label: 'Formación Especializada',
      title: 'Instituto Nacional de Perinatología',
      detail: 'Especialidad en Ginecología y Obstetricia. Subespecialidad en Urología Ginecológica. Profesor Asociado en Urología Ginecológica.',
    },
    {
      label: 'Formación Médica',
      title: 'Universidad Anáhuac',
      detail: 'Médico General. Diplomado en Cirugía Laparoscópica.',
    },
    {
      label: 'Liderazgo Profesional',
      title: 'FEMECOG · COMEGO · FLASOG',
      detail: 'Activa en comités directivos de FEMECOG y COMEGO. Representante de México ante FLASOG. Conferencista y formadora en México y las Américas.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-borgonia-light px-6 py-[100px] md:py-[140px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
          Credenciales Clínicas
        </p>
        <h2 className="text-borgonia mb-6 max-w-3xl">
          Formada para la excelencia. Preparada para la complejidad.
        </h2>
        <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
          Cada credencial representa un compromiso con estándares clínicos
          que priorizan seguridad, evidencia y resultados medibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((c, i) => (
            <div key={i} className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
              <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                <span className="text-borgonia font-extrabold text-lg">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-taupe mb-2">
                {c.label}
              </p>
              <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="text-[15px] text-grafito leading-[1.7]">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
