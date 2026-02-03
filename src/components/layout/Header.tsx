'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/es', label: 'Inicio' },
    { href: '/es/sobre-dra-erika', label: 'Sobre Dra. Erika' },
    { href: '/es/servicios', label: 'Servicios' },
    { href: '/es/preguntas-frecuentes', label: 'FAQ' },
  ]

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}
    `}>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-borgonia focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          <Link href="/es" className="flex flex-col group">
            <span className="text-2xl lg:text-3xl font-semibold text-borgonia group-hover:text-salvia transition-colors duration-300">
              Urofemina
            </span>
            <span className="text-xs lg:text-sm text-taupe mt-0.5">
              Dra. Erika Torres Valdez
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-grafito hover:text-borgonia transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-borgonia group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <div className="w-px h-6 bg-perla" />
            <LanguageSwitcher />

            <Link
              href="/es/contacto"
              className="px-6 py-2.5 text-sm font-semibold text-borgonia border border-borgonia rounded-lg hover:bg-borgonia hover:text-white transition-all duration-300"
            >
              Contacto
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
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
          <nav className="lg:hidden py-6 border-t border-perla">
            <div className="flex flex-col gap-4">
              {[...navLinks, { href: '/es/contacto', label: 'Contacto' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-grafito hover:text-borgonia py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-perla">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
