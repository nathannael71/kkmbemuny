import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

// Menggunakan font Inter seperti yang sering digunakan Apple
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Organisasi Mahasiswa',
  description: 'Website resmi organisasi mahasiswa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
