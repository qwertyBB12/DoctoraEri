import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-crema flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Logo size={80} className="mx-auto mb-8 opacity-60" />

        <h1 className="text-6xl font-extrabold text-borgonia mb-4">404</h1>

        <h2 className="text-2xl font-bold text-borgonia mb-4">
          Página no encontrada
        </h2>

        <p className="text-grafito mb-8 leading-relaxed">
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/es"
            className="px-8 py-3 bg-borgonia text-white font-semibold rounded-sm hover:bg-borgonia/90 transition-colors"
          >
            Ir al Inicio
          </Link>
          <Link
            href="/es/contacto"
            className="px-8 py-3 border border-borgonia text-borgonia font-semibold rounded-sm hover:bg-borgonia hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-perla">
          <p className="text-sm text-taupe">
            Dra. Erika Torres Valdez · Urofemina
          </p>
          <p className="text-xs text-taupe/70 mt-1">
            Uroginecología · Ciudad de México
          </p>
        </div>
      </div>
    </main>
  )
}
