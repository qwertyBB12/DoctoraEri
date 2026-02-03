import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez | Female Urology Mexico City',
  description: 'Female urology and pelvic floor medicine specialist. Treatment of urinary incontinence, pelvic organ prolapse, and urogenital dysfunctions. Mexico City.',
}

export default function HomePageEN() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
          <h1 className="mb-4">Dra. Erika Torres Valdez</h1>
          <h2 className="text-2xl md:text-3xl text-salvia font-normal mb-6">
            Female Urology &amp; Pelvic Floor Medicine Specialist
          </h2>
          <p className="text-lg text-grafito mb-4 mx-auto">
            Former Medical Director of Women&apos;s Health, Bayer Mexico
          </p>
          <p className="text-lg text-grafito mb-8 mx-auto">
            Board Certified by the Mexican Council of Urology
          </p>
          <Button href="/es/contacto">Schedule a Consultation</Button>
        </section>

        <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Female Urology &amp; Pelvic Floor Medicine</h2>
            <div className="space-y-6 text-lg text-grafito">
              <p className="mx-auto">
                Urofemina provides specialized care for conditions affecting urinary function,
                the pelvic floor, and female sexual health.
              </p>
              <p className="mx-auto">
                The practice focuses on comprehensive diagnostic evaluation and evidence-based
                treatments for urinary incontinence, pelvic organ prolapse, pelvic floor
                dysfunction, chronic pelvic pain, genitourinary syndrome of menopause,
                and female sexual dysfunction.
              </p>
              <p className="mx-auto">
                Each treatment plan is developed according to international clinical standards
                and personalized considering diagnosis, severity, individual goals, and
                patient preferences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
