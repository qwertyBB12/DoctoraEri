import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border-t-4 border-salvia rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <h3 className="text-xl font-semibold text-borgonia mb-3">{title}</h3>
      <p className="text-grafito leading-relaxed">{description}</p>
    </Link>
  )
}
