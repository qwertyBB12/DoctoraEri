import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Urofemina | Dra. Erika Torres Valdez',
  description: 'Uroginecóloga. Especialista en Medicina Pélvica Femenina y Cirugía Reconstructiva. Ex-Directora Médica Bayer México. Ciudad de México.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
