import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  index?: number
}

export default function ServiceCard({ title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="
        relative h-full
        bg-white
        border-l-4 border-borgonia
        rounded-lg
        p-10
        shadow-sm
        transition-all duration-300 ease-out
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-l-8
      ">
        {/* Number indicator */}
        <div className="absolute top-8 right-8 text-6xl font-bold text-perla group-hover:text-borgonia/10 transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </div>

        <h3 className="text-2xl font-semibold text-borgonia mb-4 group-hover:text-salvia transition-colors duration-300 relative z-10">
          {title}
        </h3>

        {/* Gold accent line */}
        <div className="w-12 h-1 bg-oro mb-6 group-hover:w-20 transition-all duration-300" />

        <p className="text-grafito leading-relaxed text-base mb-6 relative z-10">
          {description}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-borgonia font-medium text-sm group-hover:gap-3 transition-all duration-300">
          <span>Conocer más</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Hover background */}
        <div className="absolute inset-0 bg-gradient-to-br from-crema to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </article>
    </Link>
  )
}
