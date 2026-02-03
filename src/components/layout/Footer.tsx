import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-grafito text-white">
      <div className="max-w-[1600px] mx-auto px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Urofemina</h3>
            <p className="text-sm text-perla mb-6">Dra. Erika Torres Valdez</p>
            <p className="text-sm text-perla leading-relaxed mb-6">
              Urología Femenina y Medicina del Piso Pélvico
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-oro" />
              <span className="text-xs text-oro tracking-wider">CDMX</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-oro uppercase tracking-wide mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: '/es', label: 'Inicio' },
                { href: '/es/sobre-dra-erika', label: 'Sobre Dra. Erika' },
                { href: '/es/servicios', label: 'Servicios' },
                { href: '/es/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
                { href: '/es/contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-perla hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-oro uppercase tracking-wide mb-6">Información</h4>
            <ul className="space-y-3 text-sm text-perla">
              <li className="leading-relaxed">
                World Trade Center<br />
                Montecito 38, Piso 16, Oficina 36<br />
                Nápoles, Benito Juárez<br />
                Ciudad de México, 03810
              </li>
              <li className="pt-3">
                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                  Tel: +52 55 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@doctoraeri.com" className="hover:text-white transition-colors">
                  contacto@doctoraeri.com
                </a>
              </li>
              <li className="pt-3 text-xs">Español &bull; English</li>
            </ul>
          </div>

          {/* Professional */}
          <div>
            <h4 className="text-sm font-semibold text-oro uppercase tracking-wide mb-6">Profesional</h4>
            <ul className="space-y-3 text-sm text-perla">
              <li>Certificaciones Vigentes</li>
              <li>Afiliaciones Hospitalarias</li>
              <li className="pt-3">
                <Link href="/es/aviso-privacidad" className="hover:text-white transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/es/terminos" className="hover:text-white transition-colors">
                  Términos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-perla">
            <p className="mb-0">&copy; 2026 Urofemina | Dra. Erika Torres Valdez</p>
            <p className="text-xs mb-0">Urología Femenina y Medicina del Piso Pélvico</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
