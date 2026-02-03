import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export default function Button({ href, children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const base = variant === 'primary'
    ? 'inline-block px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90'
    : 'inline-block px-10 py-4 border-2 border-borgonia text-borgonia font-semibold rounded-lg hover:bg-borgonia hover:text-white transition-all'

  if (href) {
    return <Link href={href} className={`${base} ${className}`}>{children}</Link>
  }

  return <button onClick={onClick} className={`${base} ${className}`}>{children}</button>
}
