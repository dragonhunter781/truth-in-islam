import type { Metadata } from "next"
import { Inter, Amiri } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Truth in Islam - Discover Authentic Islamic Knowledge",
    template: "%s | The Truth in Islam",
  },
  description: siteConfig.description,
  keywords: [
    "Islam",
    "five pillars of Islam",
    "Islam and Christianity",
    "Islam afterlife",
    "about 5 pillars of Islam",
    "Islam beliefs and practices",
    "conversion to Islam",
    "Elijah in Islam",
    "Islam founder",
    "founder of Islam",
    "Quran",
    "Hadith",
    "Prophet Muhammad",
    "Shahada",
    "Salah",
    "Zakat",
    "Hajj",
    "Ramadan",
    "Islamic teachings",
    "Muslim faith",
  ],
  authors: [{ name: "The Truth in Islam" }],
  creator: "The Truth in Islam",
  publisher: "The Truth in Islam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "The Truth in Islam - Discover Authentic Islamic Knowledge",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Truth in Islam - Discover Authentic Islamic Knowledge",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@thetruthinislam",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Truth in Islam",
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              description: siteConfig.description,
              sameAs: [
                siteConfig.links.facebook,
                siteConfig.links.twitter,
                siteConfig.links.instagram,
                siteConfig.links.youtube,
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Truth in Islam",
              url: siteConfig.url,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${amiri.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
