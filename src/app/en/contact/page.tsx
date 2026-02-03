import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
                <form
                  name="consultation-en"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="consultation-en" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-grafito mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-grafito mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min={18}
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-grafito mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-grafito mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+52 55 XXXX XXXX"
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-grafito mb-2">
                      Reason for consultation *
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      required
                      rows={4}
                      placeholder="Briefly describe the reason for your consultation. Do not include detailed medical information."
                      className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90"
                  >
                    Submit Request
                  </button>
                  <p className="text-xs text-taupe">
                    * Required fields. We will contact you within 24-48 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
