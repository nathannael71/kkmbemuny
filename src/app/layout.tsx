import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'My Website',
  description: 'Website with Apple-inspired navbar',
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Navbar {...navbarProps} />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
