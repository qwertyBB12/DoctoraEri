import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'About Dra. Erika Torres Valdez | Urofemina',
  description: 'Medical training, professional experience, and areas of specialization of Dra. Erika Torres Valdez, urogynecologist.',
}

export default function AboutPageEN() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">

              <div className="flex items-start justify-between mb-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[2px] bg-oro" />
                    <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                      About Dra. Erika
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

              <div className="space-y-6 text-lg text-grafito leading-[1.7] max-w-3xl">
                <p>
                  My training as Medical Director at Bayer Mexico allowed me to develop
                  a comprehensive perspective on women&apos;s health, combining pharmaceutical
                  rigor with specialized clinical practice.
                </p>
                <p>
                  Urogynecology requires a multidisciplinary approach that integrates
                  gynecological, obstetric, and urological knowledge — understanding
                  complex pathophysiology and the factors that affect patients&apos; quality of life.
                </p>
                <p>
                  My practice focuses on comprehensive diagnostic evaluation, application
                  of evidence-based protocols, and development of personalized treatment
                  plans that consider each patient&apos;s individual goals and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Medical Training
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Academic background and specialization.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Universidad Anáhuac
                </h3>
                <ul className="space-y-3 text-grafito text-[15px] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Medical Degree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Diploma in Laparoscopic Surgery</span>
                  </li>
                </ul>
              </div>
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Instituto Nacional de Perinatología
                </h3>
                <ul className="space-y-3 text-grafito text-[15px] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Obstetrics and Gynecology Residency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Gynecologic Urology Subspecialty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-borgonia-light px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
              Professional Experience
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Clinical and institutional leadership.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Bayer Mexico
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Medical Director of Women&apos;s Health. Experience in clinical development,
                  regulatory affairs, and pharmaceutical evidence standards.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Instituto Nacional de Perinatología
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Associate Professor in Gynecologic Urology. Training new
                  generations of specialists.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Clinical Practice
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Specialized practice in urogynecology and female pelvic medicine.
                  Active surgeon at Hospital Español and Hospital ABC.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  International Leadership
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Lecturer and trainer across Mexico and the Americas. Invited
                  participant in United States medical societies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Professional Memberships
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Active in leading medical societies.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">01</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Mexican Federation of Colleges of Obstetrics and Gynecology
                </h3>
                <ul className="text-grafito text-[15px] leading-[1.7] space-y-2">
                  <li>Board Member (2019–2021)</li>
                  <li>Coordinator, Community Education Committee</li>
                </ul>
              </div>
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">02</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Mexican College of Specialists in Gynecology and Obstetrics
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Active on governing boards
                </p>
              </div>
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">03</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Latin American Federation of Societies of Obstetrics and Gynecology
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Mexico representative
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
