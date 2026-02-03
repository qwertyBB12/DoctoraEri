export default function Governance() {
  const credentials = [
    {
      label: 'Certificación',
      title: 'Consejo Mexicano de Urología',
      detail: 'Certificación vigente en urología con subespecialización en urología femenina y cirugía reconstructiva pélvica.',
    },
    {
      label: 'Experiencia Institucional',
      title: 'Bayer México — Dirección Médica',
      detail: 'Ex-Directora Médica de Salud Femenina. Experiencia en desarrollo clínico, asuntos regulatorios y estándares de evidencia farmacéutica.',
    },
    {
      label: 'Afiliaciones Internacionales',
      title: 'IUGA · AUGS · SMU · COMEGO',
      detail: 'Membresías activas en las principales sociedades internacionales de urología femenina y uroginecología.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-borgonia to-[#4A3542] px-6 py-[100px] md:py-[140px] compliance-dark">
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
          Credenciales Clínicas
        </p>
        <h2 className="text-white mb-6 max-w-3xl">
          Formada para la excelencia.<br />Preparada para la complejidad.
        </h2>
        <p className="text-lg text-perla leading-[1.7] max-w-[75ch] mb-16">
          Cada credencial representa un compromiso con estándares clínicos
          que priorizan seguridad, evidencia y resultados medibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((c, i) => (
            <div key={i}>
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                <span className="text-oro font-extrabold text-lg">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-oro/80 mb-2">
                {c.label}
              </p>
              <h3 className="text-xl font-extrabold text-white mb-3 tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="text-[15px] text-perla leading-[1.7]">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
