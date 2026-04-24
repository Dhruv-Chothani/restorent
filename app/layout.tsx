import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScrollProvider } from './providers'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'CafeDayNight Restaurant - Fine Dining Excellence',
  description: 'Experience culinary perfection at CafeDayNight Restaurant, where tradition meets innovation.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground scroll-smooth">
        <SmoothScrollProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
