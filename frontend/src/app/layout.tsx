import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tarott.net - Yapay Zeka Destekli Tarot Falı | Ücretsiz Online Tarot",
    template: "%s | Tarott.net - Yapay Zeka Destekli Tarot Falı"
  },
  description: "Tarott.net ile yapay zeka destekli tarot falınızı baktırın. Tek kart ve üç kart tarot falı ile geçmişinizi, bugününüzü ve geleceğinizi keşfedin. Ücretsiz online tarot deneyimi.",
  keywords: [
    "tarot falı",
    "tarott",
    "tarott.net",
    "yapay zeka tarot",
    "online tarot",
    "ücretsiz tarot",
    "tek kart tarot",
    "üç kart tarot",
    "tarot kartları",
    "tarot yorumu",
    "spiritüel danışmanlık",
    "tarot okuma",
    "tarot kartı anlamları",
    "tarot rehberi",
    "tarot sitesi",
    "tarot uygulaması"
  ],
  authors: [{ name: "Tarott" }],
  creator: "Tarott",
  publisher: "Tarott",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tarott.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tarott.net",
    siteName: "Tarott.net",
    title: "Tarott.net - Yapay Zeka Destekli Tarot Falı",
    description: "Tarott.net ile yapay zeka destekli tarot falınızı baktırın. Tek kart ve üç kart tarot falı ile geçmişinizi, bugününüzü ve geleceğinizi keşfedin.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tarott - Yapay Zeka Destekli Tarot Falı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarott.net - Yapay Zeka Destekli Tarot Falı",
    description: "Tarott.net ile yapay zeka destekli tarot falınızı baktırın. Ücretsiz online tarot deneyimi.",
    images: ["/og-image.jpg"],
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
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tarott.net",
              "url": "https://tarott.net",
              "description": "Yapay zeka destekli tarot falı platformu",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tarott.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
