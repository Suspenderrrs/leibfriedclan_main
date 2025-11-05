import type { Metadata } from 'next'
import { Dancing_Script, Inter } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Leibfried Clan - Family Recipe Collection',
  description: 'Welcome to the Leibfried Clan family recipe collection. Share and discover our favorite family recipes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}

