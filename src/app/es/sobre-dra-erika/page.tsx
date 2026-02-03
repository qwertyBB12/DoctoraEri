import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Sobre Dra. Erika Torres Valdez | Urofemina',
  description: 'Formación médica, experiencia profesional y áreas de especialización de Dra. Erika Torres Valdez, uroginecóloga.',
}

export default function AboutPage() {
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
                      Sobre Dra. Erika
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
                  Mi formación como Directora Médica en Bayer México me permitió desarrollar
                  una perspectiva integral sobre la salud femenina, combinando rigor
                  farmacéutico con práctica clínica especializada.
                </p>
                <p>
                  La uroginecología requiere una aproximación multidisciplinaria que integre
                  conocimiento ginecológico, obstétrico y urológico — comprendiendo la
                  fisiopatología compleja y los factores que afectan la calidad de vida
                  de las pacientes.
                </p>
                <p>
                  Mi práctica se enfoca en evaluación diagnóstica completa, aplicación de
                  protocolos basados en evidencia, y desarrollo de planes de tratamiento
                  personalizados que consideran objetivos individuales y preferencias de
                  cada paciente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Formación Médica
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Trayectoria académica y especialización.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Universidad Anáhuac
                </h3>
                <ul className="space-y-3 text-grafito text-[15px] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Médico General</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Diplomado en Cirugía Laparoscópica</span>
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
                    <span>Especialidad en Ginecología y Obstetricia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-5 bg-oro mt-1 shrink-0" />
                    <span>Subespecialidad en Urología Ginecológica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-borgonia-light px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-oro mb-4">
              Experiencia Profesional
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Liderazgo clínico e institucional.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Bayer México
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Directora Médica de Salud Femenina. Experiencia en desarrollo clínico,
                  asuntos regulatorios y estándares de evidencia farmacéutica.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Instituto Nacional de Perinatología
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Profesor Asociado en Urología Ginecológica. Formación de nuevas
                  generaciones de especialistas.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Práctica Clínica
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Práctica especializada en uroginecología y medicina pélvica femenina.
                  Cirujana activa en Hospital Español y Hospital ABC.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-10 shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]">
                <h3 className="text-xl font-extrabold text-borgonia mb-4 tracking-[-0.01em]">
                  Liderazgo Internacional
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Conferencista y formadora en México y las Américas. Invitada a
                  participar en sociedades médicas de Estados Unidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-taupe mb-4">
              Membresías Profesionales
            </p>
            <h2 className="text-borgonia mb-12 max-w-3xl">
              Activa en las principales sociedades médicas.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">01</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Federación Mexicana de Colegios de Obstetricia y Ginecología
                </h3>
                <ul className="text-grafito text-[15px] leading-[1.7] space-y-2">
                  <li>Miembro del Consejo Directivo (2019–2021)</li>
                  <li>Coordinadora del Comité de Educación Comunitaria</li>
                </ul>
              </div>
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">02</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Colegio Mexicano de Especialistas en Ginecología y Obstetricia
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Activa en comités directivos
                </p>
              </div>
              <div className="bg-borgonia-light rounded-[12px] p-10">
                <div className="w-14 h-14 rounded-full bg-borgonia/10 flex items-center justify-center mb-6">
                  <span className="text-borgonia font-extrabold text-lg">03</span>
                </div>
                <h3 className="text-lg font-extrabold text-borgonia mb-3 tracking-[-0.01em]">
                  Federación Latinoamericana de Sociedades de Obstetricia y Ginecología
                </h3>
                <p className="text-grafito text-[15px] leading-[1.7]">
                  Representante de México
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
