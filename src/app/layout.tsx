import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#6B4B5C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://doctoraeri.com'),
  title: 'Urofemina | Dra. Erika Torres Valdez',
  description: 'Uroginecóloga. Especialista en Medicina Pélvica Femenina y Cirugía Reconstructiva. Ex-Directora Médica Bayer México. Ciudad de México.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#6B4B5C' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    siteName: 'Urofemina',
    title: 'Dra. Erika Torres Valdez | Urofemina',
    description: 'Uroginecóloga. Especialista en Medicina Pélvica Femenina y Cirugía Reconstructiva. World Trade Center, Ciudad de México.',
    images: [
      {
        url: '/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Dra. Erika Torres Valdez - Urofemina - Uroginecología',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Erika Torres Valdez | Urofemina',
    description: 'Uroginecóloga. Especialista en Medicina Pélvica Femenina. Ciudad de México.',
    images: ['/og/twitter-es.png'],
  },
  other: {
    'msapplication-TileColor': '#6B4B5C',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
