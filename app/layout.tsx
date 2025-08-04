import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'brand.ur - Web3D Portfolio & Digital Services',
  description: 'Professional web development, e-commerce, SEO, and digital marketing services. Creating stunning 3D web experiences that drive results.',
  keywords: ['web development', '3d websites', 'ecommerce', 'seo', 'digital marketing', 'brand.ur'],
  authors: [{ name: 'brand.ur' }],
  openGraph: {
    title: 'brand.ur - Web3D Portfolio & Digital Services',
    description: 'Professional web development, e-commerce, SEO, and digital marketing services.',
    url: 'https://brand-ur.com',
    siteName: 'brand.ur',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'brand.ur - Web3D Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'brand.ur - Web3D Portfolio & Digital Services',
    description: 'Professional web development and digital services.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}