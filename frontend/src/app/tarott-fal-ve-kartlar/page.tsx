"use client";

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

export default function TarotNedir() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <BackgroundImage />
      
      {/* Header */}
      <Header showAllButtons={true} />

      {/* Main Content */}
      <main className="flex-1 relative container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Tarot Nedir?
            </span>
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6">
            <div className="text-gray-200 leading-relaxed space-y-4">
              <p className="text-sm sm:text-base">
                Tarot, yüzyıllardır kullanılan gizemli bir semboller dilidir. Her biri farklı anlamlar taşıyan 78 karttan oluşan tarot destesi, hayatın bilinmeyen yönlerini keşfetmek, içgörü kazanmak ve yön bulmak için kullanılır.
              </p>
              
              <p className="text-sm sm:text-base">
                Tarot falı, bir tür "kehanet" ya da "geleceği tahmin" aracı olmanın ötesinde; aslında kişinin iç dünyasına, duygularına ve yaşamındaki enerjilere ışık tutar. Kartlar, doğru şekilde yorumlandığında, bize farkında olmadığımız yolları ve potansiyelleri gösterebilir.
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Tarot'un Kısa Tarihi
              </span>
            </h2>
            
            <div className="text-gray-200 leading-relaxed space-y-3">
              <p className="text-sm sm:text-base">
                Tarot kartları ilk kez 15. yüzyılda İtalya'da oyun kartı olarak ortaya çıktı. Ancak zamanla mistikler, okültistler ve ruhani öğretilerle ilgilenenler tarafından bir kehanet aracına dönüştürüldü.
              </p>
              
              <p className="text-sm sm:text-base">
                18. yüzyıldan itibaren Avrupa'da spiritüel bir araç olarak kullanılmaya başlandı ve günümüze kadar popülerliğini korudu.
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Tarot Falı Nasıl Çalışır?
              </span>
            </h2>
            
            <div className="text-gray-200 leading-relaxed space-y-3">
              <p className="text-sm sm:text-base">
                Tarot falı, seçilen kartların sembolleriyle evrensel enerjilere bağlanır. Kartlar rastgele gibi görünse de, aslında kişinin o anki ruh halini ve hayatındaki enerjileri yansıtır.
              </p>
              
              <p className="text-sm sm:text-base">
                Her kart; geçmişi, bugünü ve geleceği simgeleyen mesajlar taşır. Doğru sorular sorularak açılan bir tarot falı, içsel farkındalık sağlar ve rehberlik eder.
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Neden Tarot?
              </span>
            </h2>
            
            <div className="text-gray-200 leading-relaxed space-y-3">
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Kararsız kaldığında yön bulmak için
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Aşk, kariyer, sağlık gibi konularda içgörü kazanmak için
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Ruhsal gelişim yolculuğunda bir pusula gibi kullanmak için
                </li>
              </ul>
              
              <p className="text-sm sm:text-base mt-4">
                Tarot, her zaman içsel rehberinle buluşmanı sağlar. Kartlar, aslında sana seninle ilgili bir şeyler anlatır.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 