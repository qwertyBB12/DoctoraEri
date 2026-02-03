'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href="/es"
        className={`px-2 py-1 rounded ${isSpanish ? 'bg-borgonia text-white' : 'text-taupe hover:text-borgonia'}`}
      >
        ES
      </Link>
      <span className="text-perla">|</span>
      <Link
        href="/en"
        className={`px-2 py-1 rounded ${!isSpanish ? 'bg-borgonia text-white' : 'text-taupe hover:text-borgonia'}`}
      >
        EN
      </Link>
    </div>
  )
}
