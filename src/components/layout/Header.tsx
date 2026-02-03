'use client'

import Link from 'next/link'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-perla shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/es" className="flex flex-col">
            <span className="text-2xl font-semibold text-borgonia">
              Urofemina
            </span>
            <span className="text-sm text-taupe">
              Dra. Erika Torres Valdez
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/es" className="text-grafito hover:text-borgonia transition-colors">
              Inicio
            </Link>
            <Link href="/es/sobre-dra-erika" className="text-grafito hover:text-borgonia transition-colors">
              Sobre Dra. Erika
            </Link>
            <Link href="/es/servicios" className="text-grafito hover:text-borgonia transition-colors">
              Servicios
            </Link>
            <Link href="/es/preguntas-frecuentes" className="text-grafito hover:text-borgonia transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="/es/contacto" className="text-grafito hover:text-borgonia transition-colors">
              Contacto
            </Link>
            <LanguageSwitcher />
            <Link
              href="/es/contacto"
              className="px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90"
            >
              Agendar Consulta
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/es" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/es/sobre-dra-erika" onClick={() => setIsMenuOpen(false)}>Sobre Dra. Erika</Link>
            <Link href="/es/servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link href="/es/preguntas-frecuentes" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>
            <Link href="/es/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            <LanguageSwitcher />
          </nav>
        )}
      </div>
    </header>
  )
}
