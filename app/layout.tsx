import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Visualink | Mais clientes, direto no seu WhatsApp',
  description: 'Criamos páginas que transformam visitantes em clientes para o seu negócio. Landing pages de alta conversão com integração WhatsApp.',
  keywords: ['landing page', 'whatsapp', 'marketing digital', 'conversão', 'clientes', 'pelotas', 'rs', 'pagina web', 'sites', 'loja online', 'ecommerce', 'criacao de sites', 'loja virtual', 'site institucional', 'site de vendas', 'landing page profissional', 'pagina de vendas', 'loja virtual profissional'],
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4TVXLLDTG8" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4TVXLLDTG8');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
