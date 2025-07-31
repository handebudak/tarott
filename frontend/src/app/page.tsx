"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tarott - Yapay Zeka Destekli Tarot Falı",
            "description": "Yapay zeka destekli tarot falınızı baktırın. Tek kart ve üç kart tarot falı ile geçmişinizi, bugününüzü ve geleceğinizi keşfedin.",
            "url": "https://tarott.com",
            "mainEntity": {
              "@type": "Service",
              "name": "Tarot Falı",
              "description": "Yapay zeka destekli tarot falı hizmeti",
              "provider": {
                "@type": "Organization",
                "name": "Tarott"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TRY",
                "availability": "https://schema.org/InStock"
              }
            }
          })
        }}
      />

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/tarott-bg.png"
          alt="Tarott Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
      <Header showAllButtons={false} />

      {/* Main Content */}
      <main className="flex-1 relative container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Mistik Tarot Deneyimi
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
            Yapay zeka destekli tarot falınızı baktırın. Geçmişinizi, bugününüzü ve geleceğinizi keşfedin.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/tek-kart" className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Tek Kart Tarot Falı
            </Link>
            <Link href="/uc-kart" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Üç Kart Tarot Falı
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
