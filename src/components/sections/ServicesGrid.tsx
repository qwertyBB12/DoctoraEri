import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    title: 'Incontinencia Urinaria',
    description: 'Evaluación diagnóstica completa y tratamiento especializado basado en evidencia clínica para incontinencia de esfuerzo, urgencia y mixta.',
    href: '/es/servicios/incontinencia-urinaria',
  },
  {
    title: 'Prolapso de Órganos Pélvicos',
    description: 'Manejo individualizado mediante fisioterapia especializada, pesarios o procedimientos quirúrgicos mínimamente invasivos según indicación clínica.',
    href: '/es/servicios/prolapso-pelvico',
  },
  {
    title: 'Disfunción del Piso Pélvico',
    description: 'Enfoque integral para dolor pélvico crónico, hipertonía muscular y coordinación multidisciplinaria con fisioterapia especializada.',
    href: '/es/servicios/disfuncion-piso-pelvico',
  },
  {
    title: 'Salud Sexual y Urogenital',
    description: 'Tratamiento basado en evidencia para dispareunia, atrofia vulvovaginal y síndrome genitourinario de la menopausia.',
    href: '/es/servicios/salud-sexual',
  },
  {
    title: 'Cirugía Mínimamente Invasiva',
    description: 'Técnicas laparoscópicas y reconstructivas avanzadas con protocolos de recuperación acelerada y seguimiento especializado.',
    href: '/es/servicios/cirugia-minimamente-invasiva',
  },
  {
    title: 'Evaluación Preventiva',
    description: 'Evaluación especializada pre y post-parto, consejería preventiva basada en factores de riesgo y screening individualizado.',
    href: '/es/servicios/evaluacion-preventiva',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section-spacing section-white">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-oro" />
            <span className="text-sm font-medium tracking-wide text-taupe uppercase">
              Especialización
            </span>
            <div className="w-12 h-[2px] bg-oro" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-borgonia mb-6">
            Áreas de Especialización
          </h2>
          <p className="text-lg text-grafito max-w-3xl mx-auto">
            Atención especializada en condiciones que afectan la función urinaria,
            el piso pélvico y la salud sexual femenina.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
