'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'es'

  const links = {
    es: {
      privacy: { href: '/es/aviso-privacidad', label: 'Privacidad' },
      terms: { href: '/es/terminos', label: 'Términos' },
      contact: { href: '/es/contacto', label: 'Contacto' },
    },
    en: {
      privacy: { href: '/en/privacy', label: 'Privacy' },
      terms: { href: '/en/terms', label: 'Terms' },
      contact: { href: '/en/contact', label: 'Contact' },
    },
  }

  const currentLinks = links[locale]

  return (
    <footer className="bg-grafito">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70 mb-1">
              &copy; 2026 Dra. Erika Torres Valdez · Urofemina
            </p>
            <p className="text-xs text-white/40">
              {locale === 'es'
                ? 'Uroginecología · Medicina Pélvica Femenina y Cirugía Reconstructiva · Ciudad de México'
                : 'Urogynecology · Female Pelvic Medicine & Reconstructive Surgery · Mexico City'}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href={currentLinks.privacy.href} className="hover:text-white transition-colors">
              {currentLinks.privacy.label}
            </Link>
            <Link href={currentLinks.terms.href} className="hover:text-white transition-colors">
              {currentLinks.terms.label}
            </Link>
            <Link href={currentLinks.contact.href} className="hover:text-white transition-colors">
              {currentLinks.contact.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
