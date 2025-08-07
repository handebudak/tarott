"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/tarott-bg.png"
          alt="Tarott Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 relative container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h1>

            <div className="text-center">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                Tarott, yapay zeka destekli tarot falı deneyimi sunan bir web uygulamasıdır.
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/" 
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ana Sayfaya Dön
                </Link>
              </div>
            </div>
          </div>
        </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 