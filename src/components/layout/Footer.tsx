import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-grafito border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-perla mb-1">
              &copy; 2026 Urofemina · Dra. Erika Torres Valdez
            </p>
            <p className="text-xs text-perla/50">
              Urología Femenina y Medicina del Piso Pélvico · Ciudad de México
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-perla/60">
            <Link href="/es/aviso-privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/es/terminos" className="hover:text-white transition-colors">
              Términos
            </Link>
            <a href="mailto:contacto@doctoraeri.com" className="hover:text-white transition-colors">
              contacto@doctoraeri.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
