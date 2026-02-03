import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Preguntas Frecuentes | Urofemina',
  description: 'Respuestas a preguntas comunes sobre uroginecología, consultas y tratamientos con Dra. Erika Torres Valdez.',
}

const faqs = [
  {
    question: '¿Qué es la uroginecología?',
    answer: 'La uroginecología es una subespecialidad médica en la intersección de la ginecología, obstetricia y urología. Se enfoca en el diagnóstico y tratamiento de condiciones que afectan el piso pélvico femenino, incluyendo incontinencia urinaria, prolapso de órganos pélvicos, infecciones urinarias recurrentes y disfunción del piso pélvico.',
  },
  {
    question: '¿Cuándo debo consultar a una uroginecóloga?',
    answer: 'Se recomienda consultar cuando presenta pérdida involuntaria de orina, sensación de presión o bulto vaginal, dolor pélvico crónico, urgencia urinaria frecuente, infecciones urinarias recurrentes, o molestias durante las relaciones sexuales.',
  },
  {
    question: '¿Qué incluye la primera consulta?',
    answer: 'La consulta inicial incluye una historia clínica detallada, revisión de antecedentes médicos, examen físico cuando apropiado, y desarrollo de un plan diagnóstico y de tratamiento personalizado según sus síntomas y objetivos.',
  },
  {
    question: '¿Los tratamientos son quirúrgicos?',
    answer: 'No necesariamente. El enfoque de tratamiento comienza con opciones conservadoras como fisioterapia del piso pélvico, modificaciones conductuales y tratamiento farmacológico. La cirugía se considera cuando las opciones conservadoras no logran los resultados deseados.',
  },
  {
    question: '¿Aceptan seguros médicos?',
    answer: 'Se trabaja con las principales aseguradoras. Le recomendamos contactarnos directamente para verificar la cobertura de su póliza específica.',
  },
  {
    question: '¿Cuál es la ubicación del consultorio?',
    answer: 'El consultorio se encuentra en el World Trade Center México City, Montecito 38, Piso 12, Colonia Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX.',
  },
]

export default function FAQPage() {
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
                  Información para Pacientes
                </span>
              </div>
              <h1 className="text-borgonia mb-8">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                Respuestas a las consultas más comunes sobre uroginecología,
                el proceso de consulta y las opciones de tratamiento disponibles.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-borgonia/10 flex items-center justify-center shrink-0">
                      <span className="text-borgonia font-extrabold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-borgonia tracking-[-0.01em] pt-1.5">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-grafito text-[15px] leading-[1.7] pl-14">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-borgonia px-6 py-[80px] md:py-[100px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">
              ¿Tiene más preguntas?
            </h2>
            <p className="text-lg text-white/80 leading-[1.7] max-w-[55ch] mx-auto mb-10">
              Estamos disponibles para resolver cualquier duda adicional sobre
              su caso específico durante la consulta inicial.
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
