import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

// Navbar configuration
const navbarProps = {
  logo: {
    src: '/logo.png', // Pastikan file logo.png ada di folder public
    alt: 'Website Logo'
  },
  links: [
    { id: 'home', label: 'home', href: '/' },
    { id: 'about', label: 'about', href: '/about' },
    { id: 'products', label: 'products', href: '/products' },
    { id: 'services', label: 'services', href: '/services' },
    { id: 'contact', label: 'contact', href: '/contact' }
  ],
  translations: {
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      services: 'Services',
      contact: 'Contact',
      search: 'Search',
      toggleTheme: 'Toggle dark mode',
      toggleLanguage: 'Toggle language',
      toggleMenu: 'Toggle menu'
    },
    id: {
      home: 'Beranda',
      about: 'Tentang',
      products: 'Produk',
      services: 'Layanan',
      contact: 'Kontak',
      search: 'Cari',
      toggleTheme: 'Ubah mode gelap',
      toggleLanguage: 'Ubah bahasa',
      toggleMenu: 'Ubah menu'
    }
  }
};

export const metadata: Metadata = {
  title: 'Your Website',
  description: 'Your website description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white`}>
        <Navbar {...navbarProps} />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
