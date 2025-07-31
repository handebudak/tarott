"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function GizlilikPage() {
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
      <header className="relative bg-black/30 backdrop-blur-sm border-b border-amber-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-80 h-16 relative">
              <Image
                src="/tarott-logo-2.png"
                alt="Tarott Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="text-white hover:text-amber-300 transition-colors">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Gizlilik Politikası
            </span>
          </h1>

          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-8">
            <div className="text-gray-200 leading-relaxed space-y-6">
              
              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">1. Genel Bilgi</h2>
                <p className="mb-4">
                  Biz ("biz", "bizim", "bizim site") gizliliğinizi koruma konusunda söz veriyoruz. 
                  Bu gizlilik politikası, web sitenizde toplanan bilginin nasıl kullanıldığını açıklar.
                </p>
                <p>
                  Bu politikanın 1 Ocak 2025'ten geçerli olduğu ve gerektiğinde güncellenmesi gerektiğini belirtir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">2. Toplanan Bilgi</h2>
                <div className="space-y-3">
                  <h3 className="text-amber-300 font-semibold text-lg">2.1 Kişisel Bilgi</h3>
                  <p>
                    Tarot okuma hizmetimizi kullanırken aşağıdaki bilgileri toplayabiliriz:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Adınız (isteğe bağlı)</li>
                    <li>Tarot kartları hakkında sorduğunuz sorular</li>
                    <li>Seçtiğiniz Tarot kartları</li>
                    <li>Okuma sonuçları ve yorumlar</li>
                  </ul>
                  
                  <h3 className="text-amber-300 font-semibold text-lg mt-4">2.2 Teknik Bilgi</h3>
                  <p>
                    Teknik bilgi, web sitenizde kullanırken otomatik olarak toplanır:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP adresiniz</li>
                    <li>Tarayıcı tipi ve sürümü</li>
                    <li>İşletim sistemi bilgisi</li>
                    <li>Sayfa ziyaret süreleri</li>
                    <li>Cihaz bilgisi</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">3. Bilgi Kullanım Amacı</h2>
                <p className="mb-4">
                  Toplanan bilgileri aşağıdaki amaçlarla kullanıyoruz:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Tarot okuma hizmetimizi sağlama ve iyileştirme</li>
                  <li>Yapay zeka destekli Tarot yorumları oluşturma</li>
                  <li>Web sitenizin performansını iyileştirme</li>
                  <li>Güvenlik ve dolandırıcılık önleme</li>
                  <li>Yasal görevleri yerine getirme</li>
                  <li>Kullanıcı deneyimini geliştirme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">4. Bilgi Paylaşımı</h2>
                <p className="mb-4">
                  Kişisel bilginizi üçüncü taraflara paylaşmıyoruz, ancak aşağıdaki durumlarda paylaşılır:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Yasal gerekler durumunda</li>
                  <li>Güvenlik tehditlerini önlemek için</li>
                  <li>Servis sağlayıcılarla (sadece gerekli olduğunda)</li>
                  <li>İzin verdiğinizde</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">5. Veri Güvenliği</h2>
                <p className="mb-4">
                  Bilginizi koruma için aşağıdaki güvenlik önlemlerini alıyoruz:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>SSL şifreleme protokolü</li>
                  <li>Güvenli sunucu altyapısı</li>
                  <li>Düzenli güvenlik güncellemeleri</li>
                  <li>Erişim kontrolü ve yetkilendirme</li>
                  <li>Veri yedekleme ve kurtarma sistemleri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">6. Çerezler</h2>
                <p className="mb-4">
                  Web sitenizde çerezler kullanıyoruz. Çerezler, web sitenizin işlevselliğini iyileştirmek ve kullanıcı deneyimini geliştirmek için kullanılır.
                </p>
                <p>
                  Tarayıcı ayarlarınızda çerezleri devre dışı bırakabilirsiniz, 
                  ancak bu durumda bazı özellikler doğru çalışmayabilir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">7. Kullanıcı Hakları</h2>
                <p className="mb-4">
                  GDPR'ye göre, aşağıdaki haklarınız var:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Kişisel verinizin işlenip işlenmediğini biliyor musunuz?</li>
                  <li>Kişisel veriniz hakkında bilgi isteyebilirsiniz</li>
                  <li>İşleme amacını ve bu amaçla işlenip işlenmediğini biliyor musunuz?</li>
                  <li>Kişisel verinizin hangi üçüncü tarafa aktarıldığını biliyor musunuz?</li>
                  <li>Kişisel verinizin eksik veya yanlış olduğunu düzeltebilirsiniz</li>
                  <li>Kişisel verinizi silmek veya silmek isteyebilirsiniz</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">8. İletişim</h2>
                <p className="mb-4">
                  Gizlilik politikamızla ilgili sorularınız için web sitenizden bize ulaşabilirsiniz. 
                  İletişim bilgilerimiz gelecekte güncellenecektir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">9. Politika Güncellemeleri</h2>
                <p>
                  Bu gizlilik politikası gerektiğinde güncellenebilir. Önemli değişiklikler 
                  web sitenizde duyurulacak ve kullanıcılar bilgilendirilecektir.
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 