import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactFormEN from '@/components/forms/ContactFormEN'

export const metadata = {
  title: 'Contact | Schedule a Consultation with Dra. Erika Torres',
  description: 'Request a consultation with Dra. Erika Torres Valdez. Located at World Trade Center, Mexico City.',
}

export default function ContactPageEN() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-8">Contact</h1>
            <p className="text-center text-lg text-grafito mb-12 max-w-2xl mx-auto">
              To schedule a consultation, complete the form below or
              contact us directly by phone or WhatsApp.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-6 text-borgonia">Contact Information</h3>
                <div className="space-y-6 text-grafito">
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Location</h4>
                    <p className="text-sm">
                      World Trade Center Mexico City<br />
                      Montecito 38, Floor 12<br />
                      Nápoles, Benito Juárez<br />
                      03810 Mexico City, CDMX
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Hours</h4>
                    <p className="text-sm">
                      Monday to Friday: 9:00 AM - 6:00 PM<br />
                      Saturdays: By appointment only
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Contact</h4>
                    <p className="text-sm">
                      Phone: 55 6465 5364<br />
                      WhatsApp: 55 6465 5364
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borgonia mb-2">Languages</h4>
                    <p className="text-sm">Español, English</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-borgonia">Consultation Request</h3>
                <ContactFormEN />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
