import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Preguntas Frecuentes | Urofemina',
  description: 'Respuestas a preguntas comunes sobre uroginecología, consultas y tratamientos con Dra. Erika Torres Valdez.',
}

const faqs = [
  {
    question: '¿Qué es la uroginecología?',
    answer: 'La uroginecología es una subespecialidad médica en la intersección de la ginecología, obstetricia y urología. Se enfoca en el diagnóstico y tratamiento de condiciones que afectan el piso pélvico femenino, incluyendo incontinencia urinaria, prolapso de órganos pélvicos, infecciones urinarias recurrentes y disfunción del piso pélvico. Requiere formación avanzada mediante fellowship en Medicina Pélvica Femenina y Cirugía Reconstructiva (FPMRS).',
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
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-center mb-12">Preguntas Frecuentes</h1>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-borgonia mb-3">{faq.question}</h3>
                  <p className="text-grafito leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
