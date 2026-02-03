import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FadeInSection from '@/components/ui/FadeInSection'

export const metadata = {
  title: 'Dra. Erika Torres Valdez | Urofemina | Urogynecology Mexico City',
  description: 'Urogynecologist. Gynecologic Urology specialist trained at Instituto Nacional de Perinatología. Former Medical Director of Women\'s Health, Bayer Mexico. World Trade Center, Mexico City.',
}

export default function HomePageEN() {
  const values = [
    {
      title: 'Precision Diagnostics',
      body: 'Comprehensive clinical evaluation combining detailed history, advanced urodynamic studies, and international diagnostic protocols to identify the exact cause of each condition.',
    },
    {
      title: 'Clinical Evidence',
      body: 'Every therapeutic decision is grounded in current medical literature, IUGA/AUGS clinical practice guidelines, and international standards of care.',
    },
    {
      title: 'Individualized Treatment',
      body: 'Personalized plans that consider severity, goals, preferences, and life context — from conservative options to reconstructive surgery.',
    },
  ]

  const services = [
    { title: 'Urinary Incontinence', description: 'Comprehensive diagnostic evaluation and evidence-based specialized treatment for stress, urgency, and mixed incontinence.' },
    { title: 'Pelvic Organ Prolapse', description: 'Individualized management through specialized physiotherapy, pessaries, or minimally invasive surgical procedures.' },
    { title: 'Pelvic Floor Dysfunction', description: 'Comprehensive approach to chronic pelvic pain, muscle hypertonicity, and multidisciplinary coordination with specialized physiotherapy.' },
    { title: 'Sexual & Urogenital Health', description: 'Evidence-based treatment for dyspareunia, vulvovaginal atrophy, and genitourinary syndrome of menopause.' },
    { title: 'Pelvic Reconstructive Surgery', description: 'Advanced laparoscopic and reconstructive techniques with accelerated recovery protocols and specialized follow-up.' },
    { title: 'Preventive Evaluation', description: 'Specialized pre and postpartum evaluation, preventive counseling based on risk factors, and individualized screening.' },
  ]

  const credentials = [
    {
      label: 'Specialized Training',
      title: 'Instituto Nacional de Perinatología',
      detail: 'Obstetrics and Gynecology residency. Gynecologic Urology subspecialty. Associate Professor in Gynecologic Urology.',
    },
    {
      label: 'Medical Education',
      title: 'Universidad Anáhuac',
      detail: 'Medical Degree. Diploma in Laparoscopic Surgery.',
    },
    {
      label: 'Institutional Experience',
      title: 'Bayer Mexico — Medical Director',
      detail: 'Former Medical Director of Women\'s Health. Experience in clinical development, regulatory affairs, and pharmaceutical evidence standards.',
    },
  ]

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 landing-sections">

        {/* Hero */}
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between mb-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[2px] bg-oro" />
                    <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                      Urogynecology · Female Pelvic Medicine · Mexico City
                    </span>
                  </div>
                  <h1 className="text-borgonia mb-8">
                    Dra. Erika Torres Valdez
                  </h1>
                </div>
                <div className="hidden lg:block shrink-0 ml-8">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-oro ring-offset-4">
                    <Image
                      src="/images/team/dra-erika-torres.jpg"
                      alt="Dra. Erika Torres Valdez"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-12 max-w-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed">
                    <strong className="font-semibold text-borgonia">Urogynecologist</strong> — Gynecologic Urology Specialist
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed">
                    <strong className="font-semibold text-borgonia">Instituto Nacional de Perinatología</strong> — OB/GYN, Gynecologic Urology
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed">
                    <strong className="font-semibold text-borgonia">Former Medical Director of Women&apos;s Health</strong>, Bayer Mexico
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-oro mt-1.5 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed">
                    <strong className="font-semibold text-borgonia">Urofemina</strong> · World Trade Center, Mexico City
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="/en/contact"
                  className="inline-block px-10 py-4 bg-borgonia text-white font-semibold text-base rounded-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule a Consultation
                </a>
                <div className="text-sm text-taupe">
                  <p className="font-medium">In-Person Consultations</p>
                  <p>Español · English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Overview */}
        <FadeInSection>
          <section className="px-6 py-24 md:py-[140px]">
            <div className="max-w-5xl mx-auto">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
                Practice Philosophy
              </p>
              <h2 className="text-borgonia mb-6 max-w-3xl">
                Urogynecology with scientific rigor and clinical sensitivity.
              </h2>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
                The practice integrates specialized training in gynecology, obstetrics,
                and gynecologic urology with pharmaceutical medical directorship experience —
                a unique perspective connecting therapeutic innovation with direct clinical practice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
                {values.map((v, i) => (
                  <div key={i} className="bg-borgonia-light rounded-[12px] p-10">
                    <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                      {v.title}
                    </h3>
                    <p className="text-grafito leading-[1.7] text-[15px]">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Services */}
        <FadeInSection>
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
                {services.slice(1, 4).map((s, i) => (
                  <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-10">
                    <h3 className="font-extrabold text-xl text-borgonia mb-4 tracking-[-0.01em]">{s.title}</h3>
                    <p className="text-grafito leading-[1.7] text-[15px]">{s.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {services.slice(4).map((s, i) => (
                  <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-10">
                    <h3 className="font-extrabold text-xl text-borgonia mb-4 tracking-[-0.01em]">{s.title}</h3>
                    <p className="text-grafito leading-[1.7] text-[15px]">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Credentials */}
        <FadeInSection>
          <section className="bg-borgonia-light px-6 py-[100px] md:py-[140px]">
            <div className="max-w-5xl mx-auto">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
                Clinical Credentials
              </p>
              <h2 className="text-borgonia mb-6 max-w-3xl">
                Trained for excellence. Prepared for complexity.
              </h2>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
                Each credential represents a commitment to clinical standards
                that prioritize safety, evidence, and measurable outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {credentials.map((c, i) => (
                  <div key={i} className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                    <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                      <span className="text-borgonia font-extrabold text-lg">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-taupe mb-2">{c.label}</p>
                    <h3 className="text-xl font-extrabold text-borgonia mb-3 tracking-[-0.01em]">{c.title}</h3>
                    <p className="text-[15px] text-grafito leading-[1.7]">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection>
          <section className="bg-borgonia px-6 py-[100px] md:py-[140px]">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-8">
                First Consultation
              </p>
              <h2 className="text-white mb-8 max-w-3xl mx-auto">
                The first step is a conversation.
              </h2>
              <p className="text-lg text-white/80 leading-[1.7] max-w-[65ch] mx-auto mb-12">
                The initial consultation includes a detailed medical history, diagnostic
                evaluation when appropriate, and development of a personalized treatment
                plan based on your symptoms, goals, and preferences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/en/contact"
                  className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-white text-borgonia hover:bg-oro hover:text-white"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/en/about"
                  className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 text-white border-2 border-white/60 hover:bg-white hover:text-borgonia"
                >
                  About Dra. Erika
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/20 text-[13px] text-white/60">
                <span>World Trade Center, CDMX</span>
                <span className="hidden sm:inline text-white/30">·</span>
                <span>Monday–Friday · 9:00–18:00</span>
                <span className="hidden sm:inline text-white/30">·</span>
                <span>Español · English</span>
              </div>
            </div>
          </section>
        </FadeInSection>

      </main>
      <Footer />
    </>
  )
}
