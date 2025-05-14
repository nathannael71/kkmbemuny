// src/app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

// SF Pro Display font
const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
})

// SF Pro Text font for body text
const sfProText = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Text-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-text',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apple Clone - Next.js',
  description: 'Apple website clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} ${sfProText.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
