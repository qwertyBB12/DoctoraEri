'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from '@/components/ui/Logo'

const navLinks = {
  es: [
    { href: '/es', label: 'Inicio' },
    { href: '/es/sobre-dra-erika', label: 'Sobre Dra. Erika' },
    { href: '/es/servicios', label: 'Servicios' },
    { href: '/es/preguntas-frecuentes', label: 'FAQ' },
  ],
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/about', label: 'About' },
    { href: '/en/services', label: 'Services' },
    { href: '/en/faq', label: 'FAQ' },
  ],
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'es'
  const links = navLinks[locale]
  const contactHref = locale === 'en' ? '/en/contact' : '/es/contacto'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/95 backdrop-blur-[16px] backdrop-saturate-[200%] border-b border-perla/30 shadow-[0_2px_8px_rgba(61,55,53,0.08)]'
        : 'bg-white/90 backdrop-blur-[12px] backdrop-saturate-[180%] border-b border-perla/30 shadow-[0_1px_3px_rgba(61,55,53,0.04)]'
      }
    `}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-borgonia focus:text-white focus:rounded-sm"
      >
        {locale === 'en' ? 'Skip to main content' : 'Saltar al contenido principal'}
      </a>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href={locale === 'en' ? '/en' : '/es'} className="group flex items-center gap-3">
            <Logo size={40} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-borgonia group-hover:text-salvia transition-colors duration-300 tracking-[-0.02em]">
                Dra. Erika Torres Valdez
              </span>
              <span className="text-xs text-taupe tracking-wide">
                Urofemina · {locale === 'en' ? 'Urogynecology' : 'Uroginecología'}
              </span>
            </div>
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-bold text-[15px] tracking-[0.02em] text-grafito hover:text-borgonia transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-5 bg-perla" />
            <LanguageSwitcher />

            <Link
              href={contactHref}
              className="px-6 py-2.5 font-bold text-sm tracking-wide text-borgonia border border-borgonia rounded-sm hover:bg-borgonia hover:text-white transition-all duration-300"
            >
              {locale === 'en' ? 'Contact' : 'Contacto'}
            </Link>
          </nav>

          <button
            className="sm:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-borgonia" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="sm:hidden py-6 border-t border-perla/30">
            <div className="flex flex-col gap-4">
              {[...links, { href: contactHref, label: locale === 'en' ? 'Contact' : 'Contacto' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-bold text-[15px] text-grafito hover:text-borgonia py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-perla/30">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
