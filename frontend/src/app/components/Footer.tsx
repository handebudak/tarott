import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-amber-500/30 mt-auto">
      <div className="container mx-auto px-4 py-4 sm:py-5">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <div className="w-20 sm:w-24 md:w-32 h-6 sm:h-8 md:h-12 relative">
              <Image
                src="/tarott-logo-2.png"
                alt="Tarott Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
            Yapay zeka destekli tarot falı deneyimi. Geçmişinizi, bugününüzü ve geleceğinizi keşfedin.
          </p>

          {/* Bottom Line */}
          <div className="border-t border-amber-500/20 pt-3 sm:pt-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-xs">
                © 2025 Tarott. Tüm hakları saklıdır.
              </p>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 text-xs">
                <Link 
                  href="/gizlilik" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Gizlilik Politikası
                </Link>
                <Link 
                  href="/kullanim-kosullari" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Kullanım Koşulları
                </Link>
                <Link 
                  href="/hakkimizda" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Hakkında
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
