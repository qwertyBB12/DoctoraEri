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
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/images/team/dra-erika-torres.jpg"
                  alt="Dra. Erika Torres Valdez"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h1 className="mb-8">Dra. Erika Torres Valdez</h1>

              <div className="space-y-6 text-lg text-grafito">
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

              <div className="mt-12">
                <h3 className="mb-6">Medical Training</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Medical Degree, Universidad Anáhuac</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Diploma in Laparoscopic Surgery, Universidad Anáhuac</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Obstetrics and Gynecology Residency, Instituto Nacional de Perinatología</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Gynecologic Urology Subspecialty, Instituto Nacional de Perinatología</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-6">Professional Experience</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Medical Director of Women&apos;s Health, Bayer Mexico</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Associate Professor in Gynecologic Urology, Instituto Nacional de Perinatología</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Specialized practice in urogynecology and female pelvic medicine</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Active surgeon at Hospital Español, Hospital ABC</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-6">Professional Memberships & Leadership</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Mexican Federation of Colleges of Obstetrics and Gynecology — active on governing boards</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Mexican College of Specialists in Gynecology and Obstetrics — active on governing boards</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Latin American Federation of Societies of Obstetrics and Gynecology — Mexico representative</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Invited participant in United States medical societies</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Lecturer and trainer across Mexico and the Americas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
