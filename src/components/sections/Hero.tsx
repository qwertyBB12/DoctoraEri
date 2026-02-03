import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-5 min-h-[90vh]">

          {/* LEFT: Photo - Dominant presence */}
          <div className="lg:col-span-3 relative min-h-[600px] lg:min-h-[90vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 z-10" />
            <Image
              src="/images/team/dra-erika-torres.jpg"
              alt="Dra. Erika Torres Valdez, Especialista en Urología Femenina"
              fill
              className="object-cover object-center"
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-borgonia/5 via-transparent to-transparent z-10" />
          </div>

          {/* RIGHT: Content - Professional authority */}
          <div className="lg:col-span-2 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
            <div className="max-w-xl">

              {/* Overline */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-oro" />
                <span className="text-sm font-medium tracking-wide text-taupe uppercase">
                  Urología Femenina
                </span>
              </div>

              {/* Name */}
              <h1 className="text-5xl lg:text-6xl font-semibold text-borgonia leading-[1.1] mb-6">
                Dra. Erika Torres Valdez
              </h1>

              {/* Specialty */}
              <p className="text-2xl lg:text-3xl text-salvia font-normal leading-tight mb-8">
                Especialista en Urología Femenina y Medicina del Piso Pélvico
              </p>

              {/* Credentials */}
              <div className="space-y-3 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-oro mt-1 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed mb-0">
                    Ex-Directora Médica de Salud Femenina<br />
                    <span className="font-medium">Bayer México</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-oro mt-1 shrink-0" />
                  <p className="text-lg text-grafito leading-relaxed mb-0">
                    Certificada por el<br />
                    <span className="font-medium">Consejo Mexicano de Urología</span>
                  </p>
                </div>
              </div>

              <Button href="/es/contacto" variant="primary">
                Agendar Consulta
              </Button>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-perla">
                <p className="text-sm text-taupe mb-1">
                  World Trade Center, Ciudad de México
                </p>
                <p className="text-sm text-taupe mb-0">
                  Consultas en Español e English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
