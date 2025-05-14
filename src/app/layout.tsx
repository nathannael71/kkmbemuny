import './global.css';
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { cn } from '@/lib/utils'

// Menggunakan font SF Pro lokal dari public/fonts
const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
})

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js 15.3.2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-white dark:bg-apple-darker font-sans antialiased',
        sfPro.variable
      )}>
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          {/* You can add Footer here later */}
        </ThemeProvider>
      </body>
    </html>
  )
}
