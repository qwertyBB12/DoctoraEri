import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href?: string
  index?: number
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  const content = (
    <article className="
      h-full bg-white
      shadow-[0_1px_3px_rgba(61,55,53,0.06),0_8px_24px_rgba(61,55,53,0.04)]
      rounded-[12px] p-10
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_4px_8px_rgba(61,55,53,0.08),0_20px_40px_rgba(61,55,53,0.08)]
    ">
      <h3 className="font-extrabold text-xl text-borgonia mb-4 tracking-[-0.01em] group-hover:text-salvia transition-colors duration-300">
        {title}
      </h3>
      <p className="text-grafito leading-[1.7] text-[15px]">
        {description}
      </p>
    </article>
  )

  if (href) {
    return <Link href={href} className="group block h-full">{content}</Link>
  }

  return <div className="group block h-full">{content}</div>
}
