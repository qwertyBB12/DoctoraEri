import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Services | Urofemina - Dra. Erika Torres Valdez',
  description: 'Specialized urogynecology services: urinary incontinence, pelvic prolapse, pelvic floor dysfunction, sexual health, and pelvic reconstructive surgery.',
}

const services = [
  {
    title: 'Urinary Incontinence',
    description: 'Comprehensive diagnostic evaluation and evidence-based specialized treatment for stress, urgency, and mixed incontinence. Urinary incontinence significantly impacts quality of life. A comprehensive evaluation identifies the exact type and enables a therapeutic plan that restores function and confidence.',
    featured: true,
  },
  {
    title: 'Pelvic Organ Prolapse',
    description: 'Individualized management through specialized physiotherapy, pessaries, or minimally invasive surgical procedures based on clinical indication.',
  },
  {
    title: 'Pelvic Floor Dysfunction',
    description: 'Comprehensive approach to chronic pelvic pain, muscle hypertonicity, and multidisciplinary coordination with specialized physiotherapy.',
  },
  {
    title: 'Sexual & Urogenital Health',
    description: 'Evidence-based treatment for dyspareunia, vulvovaginal atrophy, and genitourinary syndrome of menopause.',
  },
  {
    title: 'Pelvic Reconstructive Surgery',
    description: 'Advanced laparoscopic and reconstructive techniques with accelerated recovery protocols and specialized follow-up.',
  },
  {
    title: 'Preventive Evaluation',
    description: 'Specialized pre and postpartum evaluation, preventive counseling based on risk factors, and individualized screening.',
  },
]

export default function ServicesPageEN() {
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
                  Areas of Specialization
                </span>
              </div>
              <h1 className="text-borgonia mb-8">
                Specialized Services
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                Comprehensive care in urogynecology and female pelvic medicine,
                with evidence-based protocols and a personalized approach for each patient.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Conditions Treated
            </p>
            <h2 className="text-borgonia mb-6 max-w-3xl">
              Specialized care across every dimension of female pelvic health.
            </h2>
            <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
              From diagnostic evaluation to advanced surgical procedures,
              each area of practice is grounded in comprehensive urogynecological training,
              international protocols, and direct clinical experience.
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
              Treatment Approach
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Progressive, evidence-based treatment.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">01</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Diagnostic Evaluation
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Complete medical history, specialized physical examination, and
                  urodynamic studies when indicated for precise diagnosis.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">02</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Conservative Options
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Pelvic floor physiotherapy, behavioral modifications,
                  pessaries, and pharmacological treatment as first-line therapy.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">03</span>
                </div>
                <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Surgical Intervention
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Minimally invasive techniques and reconstructive surgery when
                  conservative options do not achieve satisfactory results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-borgonia px-6 py-[80px] md:py-[100px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">
              The first step is a conversation.
            </h2>
            <p className="text-lg text-white/80 leading-[1.7] max-w-[55ch] mx-auto mb-10">
              The initial consultation allows us to evaluate your specific case
              and develop a personalized treatment plan.
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
