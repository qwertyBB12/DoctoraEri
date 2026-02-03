'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routeMap: Record<string, string> = {
  '/es': '/en',
  '/en': '/es',
  '/es/sobre-dra-erika': '/en/about',
  '/en/about': '/es/sobre-dra-erika',
  '/es/servicios': '/en/services',
  '/en/services': '/es/servicios',
  '/es/preguntas-frecuentes': '/en/faq',
  '/en/faq': '/es/preguntas-frecuentes',
  '/es/contacto': '/en/contact',
  '/en/contact': '/es/contacto',
  '/es/aviso-privacidad': '/en/privacy',
  '/en/privacy': '/es/aviso-privacidad',
  '/es/terminos': '/en/terms',
  '/en/terms': '/es/terminos',
}

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')

  const esHref = isSpanish ? pathname : (routeMap[pathname] || '/es')
  const enHref = isSpanish ? (routeMap[pathname] || '/en') : pathname

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={esHref}
        className={`px-2 py-1 rounded ${isSpanish ? 'bg-borgonia text-white' : 'text-taupe hover:text-borgonia'}`}
      >
        ES
      </Link>
      <span className="text-perla">|</span>
      <Link
        href={enHref}
        className={`px-2 py-1 rounded ${!isSpanish ? 'bg-borgonia text-white' : 'text-taupe hover:text-borgonia'}`}
      >
        EN
      </Link>
    </div>
  )
}
