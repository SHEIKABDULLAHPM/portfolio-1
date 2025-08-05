import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Portfolio - Creative Excellence & Results",
    template: "%s | Digital Marketing Portfolio"
  },
  description: "Professional digital marketing services including web development, e-commerce, content marketing, SEO, and social media marketing. Creative solutions that drive results.",
  keywords: ["digital marketing", "web development", "e-commerce", "SEO", "content marketing", "social media marketing"],
  authors: [{ name: "Digital Marketing Team" }],
  creator: "Digital Marketing Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalmarketing.com",
    title: "Digital Marketing Portfolio - Creative Excellence & Results",
    description: "Professional digital marketing services that drive results through innovative strategies and cutting-edge technology.",
    siteName: "Digital Marketing Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Portfolio - Creative Excellence & Results",
    description: "Professional digital marketing services that drive results through innovative strategies and cutting-edge technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
