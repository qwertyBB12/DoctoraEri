import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  onClick?: () => void
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold text-lg tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus-visible:outline-3 focus-visible:outline-salvia focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<string, string> = {
    primary: 'px-8 py-4 bg-borgonia text-white hover:bg-salvia',
    secondary: 'px-8 py-4 bg-salvia text-white hover:bg-borgonia',
    outline: 'px-8 py-4 text-borgonia border border-borgonia hover:bg-borgonia hover:text-white',
    ghost: 'px-8 py-4 text-white border border-white/40 hover:bg-white/10',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return <button onClick={onClick} className={cls}>{children}</button>
}
