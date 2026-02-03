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
    title: 'Cirugía Reconstructiva Pélvica',
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
    <section className="px-6 py-24 md:py-[140px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
          Áreas de Especialización
        </p>
        <h2 className="text-borgonia mb-6 max-w-3xl">
          Atención especializada en cada dimensión de la salud pélvica femenina.
        </h2>
        <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
          Desde evaluación diagnóstica hasta procedimientos quirúrgicos avanzados,
          cada área de práctica se sustenta en formación uroginecológica integral,
          protocolos internacionales y experiencia clínica directa.
        </p>

        {/* Featured card */}
        <div className="bg-white shadow-[0_2px_8px_rgba(61,55,53,0.08),0_16px_48px_rgba(61,55,53,0.12)] rounded-[12px] p-12 md:p-[60px] mb-10">
          <h3 className="font-extrabold text-[28px] md:text-[32px] text-borgonia mb-6 tracking-[-0.01em]">
            {services[0].title}
          </h3>
          <p className="text-lg text-grafito leading-[1.7] max-w-[75ch]">
            {services[0].description} La incontinencia urinaria afecta significativamente
            la calidad de vida. La evaluación integral permite identificar el tipo exacto
            y diseñar un plan terapéutico que restaure función y confianza.
          </p>
        </div>

        {/* Supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(1, 4).map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* Secondary row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.slice(4).map((service, i) => (
            <ServiceCard key={i} {...service} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
