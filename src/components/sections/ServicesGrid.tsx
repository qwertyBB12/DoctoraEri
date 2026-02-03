import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    title: 'Incontinencia Urinaria',
    description: 'Evaluación diagnóstica completa y tratamiento especializado para incontinencia de esfuerzo, urgencia y mixta.',
    href: '/es/servicios/incontinencia-urinaria',
  },
  {
    title: 'Prolapso de Órganos Pélvicos',
    description: 'Manejo individualizado mediante fisioterapia, pesarios o procedimientos quirúrgicos mínimamente invasivos.',
    href: '/es/servicios/prolapso-pelvico',
  },
  {
    title: 'Disfunción del Piso Pélvico',
    description: 'Enfoque integral para dolor pélvico crónico, hipertonía y coordinación con fisioterapia especializada.',
    href: '/es/servicios/disfuncion-piso-pelvico',
  },
  {
    title: 'Salud Sexual y Urogenital',
    description: 'Tratamiento de dispareunia, atrofia vulvovaginal y síndrome genitourinario de la menopausia.',
    href: '/es/servicios/salud-sexual',
  },
  {
    title: 'Cirugía Mínimamente Invasiva',
    description: 'Técnicas laparoscópicas y reconstructivas con recuperación acelerada.',
    href: '/es/servicios/cirugia-minimamente-invasiva',
  },
  {
    title: 'Evaluación Preventiva',
    description: 'Evaluación pre-post parto, consejería preventiva y screening de riesgo.',
    href: '/es/servicios/evaluacion-preventiva',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
      <h2 className="text-center mb-12">Áreas de Especialización</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
