import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    title: 'Incontinencia Urinaria',
    subtitle: 'Escapes de orina al reír, toser, estornudar o hacer ejercicio',
    description: 'Hay diferentes tipos de incontinencia y cada uno tiene tratamientos específicos. Con una evaluación completa identificamos la causa exacta y diseñamos un plan que le devuelva el control y la confianza.',
  },
  {
    title: 'Prolapso de Órganos Pélvicos',
    subtitle: 'Sensación de bulto, presión o que "algo se sale" de la vagina',
    description: 'El prolapso ocurre cuando los órganos pélvicos descienden de su posición normal. Existen opciones desde fisioterapia y pesarios hasta cirugía mínimamente invasiva, según su caso.',
  },
  {
    title: 'Vejiga Hiperactiva',
    subtitle: 'Urgencia repentina de orinar, ir al baño muy frecuentemente',
    description: 'La necesidad urgente de orinar que interrumpe su día (o su sueño) tiene solución. Tratamos con cambios de hábitos, medicamentos o terapias avanzadas según la severidad.',
  },
  {
    title: 'Dolor Pélvico y Dispareunia',
    subtitle: 'Dolor durante las relaciones sexuales o dolor pélvico crónico',
    description: 'El dolor íntimo no es normal y no tiene que aceptarlo. Evaluamos las causas físicas y coordinamos tratamiento integral para recuperar su bienestar y vida sexual.',
  },
  {
    title: 'Infecciones Urinarias Recurrentes',
    subtitle: 'Infecciones que regresan una y otra vez',
    description: 'Si tiene más de 2-3 infecciones al año, necesita una evaluación especializada para identificar factores de riesgo y prevenir futuros episodios.',
  },
  {
    title: 'Síntomas de la Menopausia',
    subtitle: 'Sequedad vaginal, molestias urinarias, cambios íntimos',
    description: 'Los cambios hormonales afectan la salud urogenital. Ofrecemos tratamientos que alivian síntomas y mejoran la calidad de vida en esta etapa.',
  },
]

export default function ServicesGrid() {
  return (
    <section className="px-6 py-24 md:py-[140px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
          Condiciones que Tratamos
        </p>
        <h2 className="text-borgonia mb-6 max-w-3xl">
          ¿Se identifica con alguno de estos síntomas?
        </h2>
        <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
          Estos problemas son mucho más frecuentes de lo que se cree — y la buena noticia
          es que la mayoría tienen tratamientos muy efectivos. El primer paso es hablar
          con una especialista.
        </p>

        {/* Featured card - Incontinence */}
        <div className="bg-white shadow-[0_2px_8px_rgba(61,55,53,0.08),0_16px_48px_rgba(61,55,53,0.12)] rounded-[12px] p-12 md:p-[60px] mb-10">
          <p className="text-sm font-medium text-oro mb-3">Condición más frecuente</p>
          <h3 className="font-extrabold text-[28px] md:text-[32px] text-borgonia mb-2 tracking-[-0.01em]">
            {services[0].title}
          </h3>
          <p className="text-lg text-borgonia/70 mb-6">
            {services[0].subtitle}
          </p>
          <p className="text-lg text-grafito leading-[1.7] max-w-[75ch]">
            {services[0].description}
          </p>
        </div>

        {/* Other conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(1).map((service, i) => (
            <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-8">
              <h3 className="font-extrabold text-xl text-borgonia mb-2 tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-sm text-oro mb-4">
                {service.subtitle}
              </p>
              <p className="text-grafito leading-[1.7] text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
