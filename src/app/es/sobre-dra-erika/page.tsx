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

              <div className="mt-12">
                <h3 className="mb-6">Formación Médica</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Médico General, Universidad Anáhuac</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Diplomado en Cirugía Laparoscópica, Universidad Anáhuac</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Especialidad en Ginecología y Obstetricia, Instituto Nacional de Perinatología</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Subespecialidad en Urología Ginecológica, Instituto Nacional de Perinatología</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-6">Experiencia Profesional</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Directora Médica de Salud Femenina, Bayer México</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Profesor Asociado en Urología Ginecológica, Instituto Nacional de Perinatología</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Práctica especializada en uroginecología y medicina pélvica femenina</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Cirujana activa en Hospital Español, Hospital ABC</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-6">Membresías Profesionales</h3>
                <ul className="space-y-3 text-grafito pl-5">
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">International Urogynecological Association (IUGA)</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">American Urogynecologic Society (AUGS)</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-salvia">Colegio Mexicano de Especialistas en Ginecología y Obstetricia (COMEGO)</li>
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
