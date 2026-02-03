import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes: Record<string, string> = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
  }

  const variants: Record<string, string> = {
    primary: 'bg-borgonia text-white shadow-lg shadow-borgonia/20 hover:shadow-xl hover:shadow-borgonia/30 hover:-translate-y-0.5 focus:ring-borgonia',
    secondary: 'bg-salvia text-white shadow-lg shadow-salvia/20 hover:shadow-xl hover:shadow-salvia/30 hover:-translate-y-0.5 focus:ring-salvia',
    outline: 'bg-transparent text-borgonia border-2 border-borgonia hover:bg-borgonia hover:text-white hover:shadow-lg hover:shadow-borgonia/20 focus:ring-borgonia',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return <button onClick={onClick} className={cls}>{children}</button>
}
