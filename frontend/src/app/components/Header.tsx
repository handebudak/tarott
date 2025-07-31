import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  showAllButtons?: boolean;
}

const buttonClass = "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm text-center";

export default function Header({ showAllButtons = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-black/30 backdrop-blur-sm border-b border-amber-500/30">
      <div className="container mx-auto px-4 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link href="/" className="flex items-center">
            <div className="w-48 sm:w-60 md:w-80 h-10 sm:h-12 md:h-16 relative">
              <Image
                src="/tarott-logo-2.png"
                alt="Tarott Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          <Link 
            href="/tarott-fal-ve-kartlar" 
            className={buttonClass}
          >
            Tarot Nedir?
          </Link>
          <Link 
            href="/tarot-kartlari" 
            className={buttonClass}
          >
            Tarot Kartları ve Anlamları
          </Link>
          {showAllButtons && (
            <>
              <Link 
                href="/tek-kart" 
                className={buttonClass}
              >
                Tek Kart Tarot Falı
              </Link>
              <Link 
                href="/uc-kart" 
                className={buttonClass}
              >
                Üç Kart Tarot Falı
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 