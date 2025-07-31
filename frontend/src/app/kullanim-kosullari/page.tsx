"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function KullanimKosullariPage() {
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

      {/* Ana İçerik */}
      <main className="flex-1 relative container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Kullanım Koşulları
            </span>
          </h1>

          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-8">
            <div className="text-gray-200 leading-relaxed space-y-6">
              
              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">1. Genel Kabul</h2>
                <p className="mb-4">
                  Tarott web sitesini kullanırken, bu kullanım koşullarını kabul etmiş olduğunuzu varsayılır. 
                  Bu koşullar, web sitenizin kullanımıyla ilgili tüm hakları ve yükümlülükleri düzenler.
                </p>
                <p>
                  Bu koşullar, Ocak 1, 2025&apos;ten geçerli olup, gerektiğinde güncellenmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">2. Hizmet Tanımı</h2>
                <p className="mb-4">
                  Tarott, web platformu olup, yapay zeka destekli tarot okuma hizmetleri sunmaktadır. 
                  Hizmetlerimiz şunları içermektedir:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Tek kart tarot okuma</li>
                  <li>Üç kart tarot okuma</li>
                  <li>Yapay zeka destekli okuma çözümleri</li>
                  <li>Tarot kartı bilgileri ve anlamları</li>
                  <li>Kullanıcı dostu arayüz</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">3. Kullanıcı Hakkı</h2>
                <p className="mb-4">
                  Web sitenizde kullanırken aşağıdaki haklarınız bulunmaktadır:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Ücretsiz tarot okuma hizmetlerine erişim</li>
                  <li>Kişisel bilgilerinizin güvenli bir şekilde paylaşılması</li>
                  <li>Hizmet kalitesi hakkında geri bildirim</li>
                  <li>Gizlilik politikasını inceleme</li>
                  <li>Hizmetlerimizle ilgili sorularınızı sorma</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">4. Kullanım Sınırlamaları</h2>
                <p className="mb-4">
                  Web sitenizde kullanırken aşağıdaki sınırlamalara uymalısınız:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Yasa dışı içerik paylaşmayın</li>
                  <li>Başkalarının haklarını ihlal etmeyin</li>
                  <li>Sistemi yanlış kullanmayın</li>
                  <li>Spam ve zararlı içerik göndermeyin</li>
                  <li>Hizmetlerimizi ticari amaçlarla kullanmayın</li>
                  <li>Teknik güvenlik önlemlerini çevirmeye çalışmayın</li>
                </ul>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">5. Sorumluluk Reddi</h2>
                <div className="space-y-4">
                  <p>
                    <strong className="text-amber-300">Okuma Sonuçları:</strong> Tarot okuma sonuçları eğlence amaçlıdır 
                    ve profesyonel danışmanlıkla değiştirilemez. Önemli kararlar için profesyonel danışmanlık arayın.
                  </p>
                  <p>
                    <strong className="text-amber-300">Hizmet Durdurulması:</strong> Web sitenizde teknik bir sorun olursa, 
                    bu durumlarda hizmet geçici olarak durabilir.
                  </p>
                  <p>
                    <strong className="text-amber-300">Veri Kaybı:</strong> Teknik bir sorun nedeniyle veri kaybı olabilir. 
                    Önemli bilgilerinizi yedeklemenizi öneririz.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">6. Fikri Mülkiyet Hakları</h2>
                <p className="mb-4">
                  Web sitenizdeki tüm içerik, tasarım ve teknoloji bizimle ilgilidir:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Web sitesi tasarımı ve arayüzü</li>
                  <li>Yazılım kodları ve algoritmalar</li>
                  <li>Logo, marka ve görsel malzemeler</li>
                  <li>İçerik ve metinler</li>
                  <li>Veritabanı ve yapı</li>
                </ul>
                <p className="mt-4">
                  Bu içeriğin yetkisiz kullanımı, kopyalanması veya dağıtımı yasaklanmıştır.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">7. Gizlilik ve Veri Güvenliği</h2>
                <p className="mb-4">
                  Veri güvenliği bize önemlidir:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>KVKK'ya uygun veri işleme</li>
                  <li>SSL şifreleme ile güvenli veri iletişimi</li>
                  <li>Üçüncü taraflarla veri paylaşımında şeffaflık</li>
                  <li>Kullanıcı haklarına saygı</li>
                  <li>Düzenli güvenlik güncellemeleri</li>
                </ul>
                <p className="mt-4">
                  Daha detaylı bilgi için <Link href="/gizlilik" className="text-amber-300 hover:text-amber-400 underline">Gizlilik Politikası</Link>&apos;nızı inceleyin.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">8. Hizmet İyileştirmeleri</h2>
                <p className="mb-4">
                  Hizmetlerimizi sürekli iyileştirmekteyiz:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Yeni özellikler ekleme</li>
                  <li>Mevcut özellikleri güncelleme</li>
                  <li>Hizmet kalitesini iyileştirme</li>
                  <li>Güvenlik önlemlerini güçlendirme</li>
                  <li>Kullanıcı deneyimini iyileştirme</li>
                </ul>
                <p className="mt-4">
                  Kullanıcılar önemli değişiklikleri bildirim alacaktır.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">9. İletişim ve Destek</h2>
                <p className="mb-4">
                  Sorularınızı ve geri bildirimlerinizi web sitenizden bize ulaştırabilirsiniz. 
                  İletişim bilgilerimiz gelecekte güncellenecektir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">10. Yasal Disiplinler</h2>
                <p className="mb-4">
                  Bu kullanım koşulları Türk yasalarına tabidir. 
                  Disiplinlerde bir anlaşmazlık durumunda Türk mahkemeleri yetkili olacaktır.
                </p>
                <p>
                  Bu koşulların herhangi bir maddesinin geçersiz sayılması durumunda, diğer maddelerin geçerliliği 
                  devam edecektir.
                </p>
              </div>

              <div>
                <h2 className="text-amber-400 font-bold text-xl mb-4">11. Koşul Güncellemeleri</h2>
                <p>
                  Bu kullanım koşulları gerektiğinde güncellenmektedir. Güncellenmiş versiyonlar 
                  web sitenizde yayınlanacak ve kullanıcılar bildirim alacaktır. 
                  Güncellenmiş koşulları kabul etmeyen kullanıcılar hizmetlerimizi kullanamayacaktır.
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