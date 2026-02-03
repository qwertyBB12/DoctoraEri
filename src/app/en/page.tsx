import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FadeInSection from '@/components/ui/FadeInSection'

export const metadata = {
  title: 'Dra. Erika Torres Valdez | Urofemina | Urogynecology Mexico City',
  description: 'Urogynecologist specializing in urinary incontinence, pelvic organ prolapse, and pelvic floor disorders. Instituto Nacional de Perinatología trained. World Trade Center, Mexico City.',
  openGraph: {
    title: 'Dra. Erika Torres Valdez | Urofemina',
    description: 'Urogynecologist. Female Pelvic Medicine & Reconstructive Surgery specialist. World Trade Center, Mexico City.',
    locale: 'en_US',
    images: [{ url: '/og/og-en.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/twitter-en.png'],
  },
}

export default function HomePageEN() {
  const howWeWork = [
    {
      title: 'We Listen First',
      body: 'Every consultation starts by hearing your complete story — your symptoms, how long you\'ve had them, how they affect your life. That\'s the only way to reach the right diagnosis.',
    },
    {
      title: 'Precise Diagnosis',
      body: 'We use urodynamic studies and international protocols to identify exactly what\'s causing your symptoms. Good treatment starts with good diagnosis.',
    },
    {
      title: 'Treatment Tailored to You',
      body: 'Not every patient needs surgery. We explore conservative options like physical therapy and medication first. If surgery is needed, we use minimally invasive techniques.',
    },
  ]

  const conditions = [
    {
      title: 'Urinary Incontinence',
      subtitle: 'Leaking urine when you laugh, cough, sneeze, or exercise',
      description: 'There are different types of incontinence and each has specific treatments. With a complete evaluation, we identify the exact cause and design a plan to restore your control and confidence.',
      featured: true,
    },
    {
      title: 'Pelvic Organ Prolapse',
      subtitle: 'Feeling of bulge, pressure, or "something falling out"',
      description: 'Prolapse happens when pelvic organs descend from their normal position. Options range from physical therapy and pessaries to minimally invasive surgery.',
    },
    {
      title: 'Overactive Bladder',
      subtitle: 'Sudden urge to urinate, going to the bathroom too frequently',
      description: 'The urgent need to urinate that interrupts your day (or sleep) has solutions. We treat with lifestyle changes, medication, or advanced therapies.',
    },
    {
      title: 'Pelvic Pain & Painful Intercourse',
      subtitle: 'Pain during sex or chronic pelvic pain',
      description: 'Intimate pain is not normal and you don\'t have to accept it. We evaluate physical causes and coordinate comprehensive treatment.',
    },
    {
      title: 'Recurrent UTIs',
      subtitle: 'Infections that keep coming back',
      description: 'If you have more than 2-3 infections per year, you need specialized evaluation to identify risk factors and prevent future episodes.',
    },
    {
      title: 'Menopause Symptoms',
      subtitle: 'Vaginal dryness, urinary discomfort, intimate changes',
      description: 'Hormonal changes affect urogenital health. We offer treatments that relieve symptoms and improve quality of life during this stage.',
    },
  ]

  const credentials = [
    {
      label: 'Specialized Training',
      title: 'Instituto Nacional de Perinatología',
      detail: 'Obstetrics and Gynecology residency. Gynecologic Urology subspecialty.',
    },
    {
      label: 'Medical Education',
      title: 'Universidad Anáhuac',
      detail: 'Medical Degree. Diploma in Laparoscopic Surgery.',
    },
    {
      label: 'Industry Experience',
      title: 'Former Medical Director',
      detail: 'Women\'s Health Division, Bayer Mexico. Bridging clinical practice with therapeutic innovation.',
    },
  ]

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 landing-sections">

        {/* Hero - Patient-focused */}
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-oro" />
                  <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                    Urogynecology · Mexico City
                  </span>
                </div>

                <h1 className="text-borgonia mb-6">
                  You don&apos;t have to live like this.
                </h1>

                <p className="text-xl text-grafito leading-relaxed max-w-2xl mb-8">
                  If you experience urine leakage when you laugh, cough, or exercise;
                  a feeling of bulge or pressure in your vaginal area; sudden urgency to urinate;
                  or intimate discomfort affecting your daily life — <strong className="text-borgonia">there are solutions,
                  and you&apos;re not alone.</strong>
                </p>

                <p className="text-lg text-grafito/80 leading-relaxed max-w-2xl">
                  These symptoms are more common than people talk about, and with proper diagnosis
                  and treatment, most patients recover their quality of life.
                </p>
              </div>

              {/* Doctor introduction */}
              <div className="bg-borgonia-light rounded-[12px] p-8 md:p-10 mb-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                  <div className="shrink-0">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-oro ring-offset-4 ring-offset-borgonia-light">
                      <Image
                        src="/images/team/dra-erika-torres.jpg"
                        alt="Dra. Erika Torres Valdez"
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-borgonia mb-3">
                      Dra. Erika Torres Valdez
                    </h2>
                    <p className="text-grafito leading-relaxed mb-4">
                      <strong className="text-borgonia">Urogynecologist</strong> — specializing in diagnosis
                      and treatment of female pelvic floor conditions: urinary incontinence,
                      prolapse, pelvic pain, and intimate health.
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-taupe">
                      <span>Instituto Nacional de Perinatología</span>
                      <span className="hidden sm:inline">·</span>
                      <span>Former Medical Director, Bayer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a
                  href="/en/contact"
                  className="inline-block px-10 py-4 bg-borgonia text-white font-semibold text-base rounded-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule a Consultation
                </a>
                <div className="text-sm text-taupe">
                  <p className="font-medium">World Trade Center, CDMX</p>
                  <p>Consultations in Spanish & English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <FadeInSection>
          <section className="px-6 py-24 md:py-[140px]">
            <div className="max-w-5xl mx-auto">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
                How We Work
              </p>
              <h2 className="text-borgonia mb-6 max-w-3xl">
                Patient-centered medical care.
              </h2>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
                Many women spend years with symptoms that affect their confidence and quality of life,
                not knowing effective treatments exist. My commitment is to provide a space
                where you can speak openly, receive a clear diagnosis, and find
                the solution that best fits your life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
                {howWeWork.map((v, i) => (
                  <div key={i} className="bg-borgonia-light rounded-[12px] p-10">
                    <div className="w-12 h-12 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                      <span className="text-borgonia font-extrabold text-lg">{String(i + 1).padStart(2, '0')}</span>
                    </div>
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

        {/* Conditions */}
        <FadeInSection>
          <section className="px-6 py-24 md:py-[140px]">
            <div className="max-w-5xl mx-auto">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
                Conditions We Treat
              </p>
              <h2 className="text-borgonia mb-6 max-w-3xl">
                Do any of these symptoms sound familiar?
              </h2>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
                These problems are far more common than people realize — and the good news
                is that most have very effective treatments. The first step is talking
                to a specialist.
              </p>

              {/* Featured */}
              <div className="bg-white shadow-[0_2px_8px_rgba(61,55,53,0.08),0_16px_48px_rgba(61,55,53,0.12)] rounded-[12px] p-12 md:p-[60px] mb-10">
                <p className="text-sm font-medium text-oro mb-3">Most common condition</p>
                <h3 className="font-extrabold text-[28px] md:text-[32px] text-borgonia mb-2 tracking-[-0.01em]">
                  {conditions[0].title}
                </h3>
                <p className="text-lg text-borgonia/70 mb-6">
                  {conditions[0].subtitle}
                </p>
                <p className="text-lg text-grafito leading-[1.7] max-w-[75ch]">
                  {conditions[0].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {conditions.slice(1).map((c, i) => (
                  <div key={i} className="bg-white shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)] rounded-[12px] p-8">
                    <h3 className="font-extrabold text-xl text-borgonia mb-2 tracking-[-0.01em]">{c.title}</h3>
                    <p className="text-sm text-oro mb-4">{c.subtitle}</p>
                    <p className="text-grafito leading-[1.7] text-[15px]">{c.description}</p>
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
                Training & Credentials
              </p>
              <h2 className="text-borgonia mb-6 max-w-3xl">
                Specialized training you can trust.
              </h2>
              <p className="text-lg text-grafito leading-[1.7] max-w-[75ch] mb-16">
                Urogynecology requires years of specialized training beyond general gynecology.
                My background combines clinical expertise with experience in medical leadership
                and therapeutic innovation.
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
                Take the First Step
              </p>
              <h2 className="text-white mb-8 max-w-3xl mx-auto">
                You don&apos;t have to keep living with these symptoms.
              </h2>
              <p className="text-lg text-white/80 leading-[1.7] max-w-[65ch] mx-auto mb-12">
                The initial consultation is a confidential conversation where we&apos;ll discuss
                what you&apos;re experiencing, answer your questions, and explain your treatment options.
                No pressure, no judgment — just clear information so you can make
                the best decision for your health.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/en/contact"
                  className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-white text-borgonia hover:bg-oro hover:text-white"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/en/faq"
                  className="inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm px-8 py-4 text-white border-2 border-white/60 hover:bg-white hover:text-borgonia"
                >
                  Frequently Asked Questions
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
