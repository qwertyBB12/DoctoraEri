import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Frequently Asked Questions | Urofemina',
  description: 'Answers to common questions about urogynecology, consultations, and treatments with Dra. Erika Torres Valdez.',
}

const faqs = [
  {
    question: 'What is urogynecology?',
    answer: 'Urogynecology is a medical subspecialty at the intersection of gynecology, obstetrics, and urology. It focuses on the diagnosis and treatment of conditions affecting the female pelvic floor, including urinary incontinence, pelvic organ prolapse, recurrent urinary tract infections, and pelvic floor dysfunction.',
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
      <main id="main-content" className="pt-20">
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-oro" />
                <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                  Patient Information
                </span>
              </div>
              <h1 className="text-borgonia mb-8">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                Answers to the most common questions about urogynecology,
                the consultation process, and available treatment options.
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
              Have more questions?
            </h2>
            <p className="text-lg text-white/80 leading-[1.7] max-w-[55ch] mx-auto mb-10">
              We are available to answer any additional questions about
              your specific case during the initial consultation.
            </p>
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-white text-borgonia hover:bg-oro hover:text-white"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
