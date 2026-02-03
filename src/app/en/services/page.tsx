import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/ui/ServiceCard'

export const metadata = {
  title: 'Services | Urofemina - Dra. Erika Torres Valdez',
  description: 'Specialized urogynecology services: urinary incontinence, pelvic prolapse, pelvic floor dysfunction, sexual health, and pelvic reconstructive surgery.',
}

const services = [
  {
    title: 'Urinary Incontinence',
    description: 'Comprehensive diagnostic evaluation and evidence-based specialized treatment for stress, urgency, and mixed incontinence.',
  },
  {
    title: 'Pelvic Organ Prolapse',
    description: 'Individualized management through specialized physiotherapy, pessaries, or minimally invasive surgical procedures.',
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
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6">Specialized Services</h1>
            <p className="text-lg text-grafito mx-auto">
              Comprehensive care in urogynecology and female pelvic medicine,
              with evidence-based protocols and a personalized approach for each patient.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Areas of Specialization
            </p>
            <h2 className="text-borgonia mb-6 max-w-3xl">
              Specialized care across every dimension of female pelvic health.
            </h2>
            <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
              From diagnostic evaluation to advanced surgical procedures, each area
              of practice is grounded in comprehensive urogynecological training,
              international protocols, and direct clinical experience.
            </p>

            <div className="bg-white shadow-[0_2px_8px_rgba(61,55,53,0.08),0_16px_48px_rgba(61,55,53,0.12)] rounded-[12px] p-12 md:p-[60px] mb-10">
              <h3 className="font-extrabold text-[28px] md:text-[32px] text-borgonia mb-6 tracking-[-0.01em]">
                {services[0].title}
              </h3>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch]">
                {services[0].description} Urinary incontinence significantly impacts
                quality of life. A comprehensive evaluation identifies the exact type
                and enables a therapeutic plan that restores function and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(1, 4).map((service, i) => (
                <ServiceCard key={i} {...service} index={i} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {services.slice(4).map((service, i) => (
                <ServiceCard key={i} {...service} index={i + 3} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
