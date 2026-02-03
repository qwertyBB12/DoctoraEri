import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="py-20 px-6 max-w-[1200px] mx-auto bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <Image
              src="/images/team/dra-erika-torres.jpg"
              alt="Dra. Erika Torres Valdez, Especialista en Urología Femenina"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="order-1 md:order-2 text-center md:text-left">
          <h1 className="mb-4">Dra. Erika Torres Valdez</h1>
          <h2 className="text-2xl md:text-3xl text-salvia font-normal mb-6">
            Especialista en Urología Femenina y Medicina del Piso Pélvico
          </h2>
          <p className="text-lg text-grafito mb-4">
            Ex-Directora Médica de Salud Femenina, Bayer México
          </p>
          <p className="text-lg text-grafito mb-8">
            Certificada por el Consejo Mexicano de Urología
          </p>
          <Button href="/es/contacto">Agendar Consulta</Button>
        </div>
      </div>
    </section>
  )
}
