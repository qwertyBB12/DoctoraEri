import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-perla">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-borgonia mb-4">Navegación</h3>
            <ul className="space-y-2 text-taupe">
              <li><Link href="/es" className="hover:text-borgonia">Inicio</Link></li>
              <li><Link href="/es/sobre-dra-erika" className="hover:text-borgonia">Sobre Dra. Erika</Link></li>
              <li><Link href="/es/servicios" className="hover:text-borgonia">Servicios</Link></li>
              <li><Link href="/es/preguntas-frecuentes" className="hover:text-borgonia">Preguntas Frecuentes</Link></li>
              <li><Link href="/es/contacto" className="hover:text-borgonia">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-borgonia mb-4">Información</h3>
            <ul className="space-y-2 text-taupe text-sm">
              <li>World Trade Center</li>
              <li>Montecito 38, Piso 16, Oficina 36</li>
              <li>Nápoles, Benito Juárez</li>
              <li>Ciudad de México, 03810</li>
              <li className="pt-2">Tel: +52 55 1234 5678</li>
              <li>Email: contacto@doctoraeri.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-borgonia mb-4">Profesional</h3>
            <ul className="space-y-2 text-taupe text-sm">
              <li>Certificaciones Vigentes</li>
              <li>Afiliaciones Hospitalarias</li>
              <li><Link href="/es/aviso-privacidad" className="hover:text-borgonia">Aviso de Privacidad</Link></li>
              <li><Link href="/es/terminos" className="hover:text-borgonia">Términos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-perla text-center text-sm text-taupe">
          <p>&copy; 2026 Urofemina | Dra. Erika Torres Valdez</p>
          <p className="mt-1">Urología Femenina y Medicina del Piso Pélvico | Ciudad de México</p>
        </div>
      </div>
    </footer>
  )
}
