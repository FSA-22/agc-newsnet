import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/DesktopNavbar';
import MobileNavbar from '@/components/navbar/MobileNavbar';
import HeroSection from '@/components/hero/HeroItems';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AGC NEWSNET',
  description: 'Home of early news',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
        <HeroSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
