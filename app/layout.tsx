import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Visualink | Mais clientes, direto no seu WhatsApp',
  description: 'Criamos páginas que transformam visitantes em clientes para o seu negócio. Landing pages de alta conversão com integração WhatsApp.',
  keywords: ['landing page', 'whatsapp', 'marketing digital', 'conversão', 'clientes'],
  icons: {
    icon: '/photos/visualink_logo_sfundo.PNG',
    apple: '/photos/visualink_logo_sfundo.PNG',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A2540',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
