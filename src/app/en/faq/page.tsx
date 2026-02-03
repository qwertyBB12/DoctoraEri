import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Frequently Asked Questions | Urofemina',
  description: 'Answers to common questions about urogynecology, consultations, and treatments with Dra. Erika Torres Valdez.',
}

const faqs = [
  {
    question: 'What is urogynecology?',
    answer: 'Urogynecology is a medical subspecialty at the intersection of gynecology, obstetrics, and urology. It focuses on the diagnosis and treatment of conditions affecting the female pelvic floor, including urinary incontinence, pelvic organ prolapse, recurrent urinary tract infections, and pelvic floor dysfunction. It requires advanced fellowship training in Female Pelvic Medicine and Reconstructive Surgery (FPMRS).',
  },
  {
    question: 'When should I see a urogynecologist?',
    answer: 'You should consider a consultation if you experience involuntary urine leakage, a sensation of pressure or bulging in the vaginal area, chronic pelvic pain, frequent urinary urgency, recurrent urinary tract infections, or discomfort during sexual intercourse.',
  },
  {
    question: 'What does the first consultation include?',
    answer: 'The initial consultation includes a detailed medical history, review of medical records, physical examination when appropriate, and development of a personalized diagnostic and treatment plan based on your symptoms and goals.',
  },
  {
    question: 'Are all treatments surgical?',
    answer: 'Not necessarily. The treatment approach begins with conservative options such as pelvic floor physiotherapy, behavioral modifications, and pharmacological treatment. Surgery is considered when conservative options do not achieve the desired results.',
  },
  {
    question: 'Do you accept medical insurance?',
    answer: 'We work with major insurance providers. We recommend contacting us directly to verify coverage for your specific policy.',
  },
  {
    question: 'Where is the office located?',
    answer: 'The office is located at World Trade Center Mexico City, Montecito 38, Floor 12, Colonia Nápoles, Benito Juárez, 03810 Mexico City, CDMX.',
  },
]

export default function FAQPageEN() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-center mb-12">Frequently Asked Questions</h1>

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
