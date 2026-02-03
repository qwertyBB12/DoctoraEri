import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Servicios | Urofemina - Dra. Erika Torres Valdez',
  description: 'Servicios especializados en uroginecología: incontinencia urinaria, prolapso pélvico, disfunción del piso pélvico, salud sexual y cirugía reconstructiva pélvica.',
}

const services = [
  {
    title: 'Incontinencia Urinaria',
    description: 'Evaluación diagnóstica completa y tratamiento especializado basado en evidencia clínica para incontinencia de esfuerzo, urgencia y mixta. La incontinencia urinaria afecta significativamente la calidad de vida. La evaluación integral permite identificar el tipo exacto y diseñar un plan terapéutico que restaure función y confianza.',
    featured: true,
  },
  {
    title: 'Prolapso de Órganos Pélvicos',
    description: 'Manejo individualizado mediante fisioterapia especializada, pesarios o procedimientos quirúrgicos mínimamente invasivos según indicación clínica.',
  },
  {
    title: 'Disfunción del Piso Pélvico',
    description: 'Enfoque integral para dolor pélvico crónico, hipertonía muscular y coordinación multidisciplinaria con fisioterapia especializada.',
  },
  {
    title: 'Salud Sexual y Urogenital',
    description: 'Tratamiento basado en evidencia para dispareunia, atrofia vulvovaginal y síndrome genitourinario de la menopausia.',
  },
  {
    title: 'Cirugía Reconstructiva Pélvica',
    description: 'Técnicas laparoscópicas y reconstructivas avanzadas con protocolos de recuperación acelerada y seguimiento especializado.',
  },
  {
    title: 'Evaluación Preventiva',
    description: 'Evaluación especializada pre y post-parto, consejería preventiva basada en factores de riesgo y screening individualizado.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-oro" />
                <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                  Áreas de Especialización
                </span>
              </div>
              <h1 className="text-borgonia mb-8">
                Servicios Especializados
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                Atención integral en uroginecología y medicina pélvica femenina,
                con protocolos basados en evidencia y enfoque personalizado para cada paciente.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Condiciones Tratadas
            </p>
            <h2 className="text-borgonia mb-6 max-w-3xl">
              Atención especializada en cada dimensión de la salud pélvica femenina.
            </h2>
            <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
              Desde evaluación diagnóstica hasta procedimientos quirúrgicos avanzados,
              cada área de práctica se sustenta en formación uroginecológica integral,
              protocolos internacionales y experiencia clínica directa.
            </p>

            {/* Featured service */}
            <div className="bg-white shadow-[0_2px_8px_rgba(61,55,53,0.08),0_16px_48px_rgba(61,55,53,0.12)] rounded-[12px] p-12 md:p-[60px] mb-10">
              <h3 className="font-extrabold text-[28px] md:text-[32px] text-borgonia mb-6 tracking-[-0.01em]">
                {services[0].title}
              </h3>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch]">
                {services[0].description}
              </p>
            </div>

            {/* Grid of other services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(1, 4).map((service, i) => (
                <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-10">
                  <h3 className="font-extrabold text-xl text-borgonia mb-4 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-grafito leading-[1.7] text-[15px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {services.slice(4).map((service, i) => (
                <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-10">
                  <h3 className="font-extrabold text-xl text-borgonia mb-4 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-grafito leading-[1.7] text-[15px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-borgonia-light px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
              Enfoque de Tratamiento
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Tratamiento progresivo y basado en evidencia.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">01</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Evaluación Diagnóstica
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Historia clínica completa, examen físico especializado y estudios
                  urodinámicos cuando indicado para diagnóstico preciso.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">02</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Opciones Conservadoras
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Fisioterapia del piso pélvico, modificaciones conductuales,
                  pesarios y tratamiento farmacológico como primera línea.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">03</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Intervención Quirúrgica
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Técnicas mínimamente invasivas y cirugía reconstructiva cuando
                  las opciones conservadoras no logran resultados satisfactorios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-borgonia px-6 py-[80px] md:py-[100px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">
              El primer paso es una conversación.
            </h2>
            <p className="text-lg text-white/80 leading-[1.7] max-w-[55ch] mx-auto mb-10">
              La consulta inicial permite evaluar su caso específico y desarrollar
              un plan de tratamiento personalizado.
            </p>
            <a
              href="/es/contacto"
              className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-white text-borgonia hover:bg-oro hover:text-white"
            >
              Agendar Consulta
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
