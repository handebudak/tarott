"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import FormSection from "../components/FormSection";
import CardGrid from "../components/CardGrid";
import SelectedCardDisplay from "../components/SelectedCardDisplay";
import ReadingResult from "../components/ReadingResult";
import { useTarotReading } from "../hooks/useTarotReading";

export default function UcKartPage() {
  const [enableReversed, setEnableReversed] = useState(false);
  
  const {
    name,
    setName,
    question,
    setQuestion,
    selectedCards,
    cards,
    loadingCards,
    isLoading,
    reading,
    cardOrientations,
    modalConfig,
    setModalConfig,
    handleCardSelect,
    handleRandomSelect,
    handleSubmit,
    handleResetPage: originalHandleResetPage,
    getSelectedCardImage,
    getCardNameWithTranslation,
    getSelectedCardMeaning,
  } = useTarotReading({ enableReversed, type: 'three' });

  // Özelleştirilmiş reset fonksiyonu
  const handleResetPage = () => {
    setEnableReversed(false); // Ters kart seçeneğini kapat
    originalHandleResetPage(); // Orijinal reset fonksiyonunu çağır
  };

  const formInstructions = [
    "✨ Gözlerini kapat, birkaç derin nefes al…",
    "✨ Aklında bir soru, bir konu ya da bir niyet belirle.",
    "Bu özel kişiyle ilişkin, iş hayatın, karar veremediğin bir durum ya da sadece \"hayatımın gidişatı hakkında ne bilmeliyim?\" gibi genel bir sorgu olabilir.",
    "Kartlarını sezgilerinle seç ve evrenin rehberliğine kulak ver 💫"
  ];

  const threeCardInfo = (
    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
      <p className="text-amber-300 font-medium mb-2">Seçeceğin üç kart, sana şu sırayla rehberlik edecek:</p>
      <div className="space-y-1 text-xs">
        <p>1️⃣ <strong>Geçmiş</strong> – Seni bu noktaya getiren enerjiler</p>
        <p>2️⃣ <strong>Şimdi</strong> – Mevcut durumun, enerjin</p>
        <p>3️⃣ <strong>Gelecek</strong> – Bu yolda seni neler bekliyor</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Üç Kart Tarot Falı",
            "description": "Üç kart tarot falı ile geçmiş, şimdi ve geleceğinizi keşfetme hizmeti",
            "url": "https://tarott.com/uc-kart",
            "provider": {
              "@type": "Organization",
              "name": "Tarott"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "TRY",
              "availability": "https://schema.org/InStock"
            },
            "serviceType": "Tarot Reading",
            "areaServed": "TR"
          })
        }}
      />

      {/* Background Image */}
      <BackgroundImage />
      
      {/* Header */}
      <Header showBackButton={true} showAllButtons={true} />

      {/* Main Content */}
      <main className="flex-1 relative container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Üç Kart Tarot Falı
            </span>
          </h1>

            {/* Form Section */}
            <FormSection
              name={name}
              setName={setName}
              question={question}
              setQuestion={setQuestion}
              enableReversed={enableReversed}
              setEnableReversed={setEnableReversed}
              title="🔮 Üç Kart Tarot Falı Nedir?"
              description="Üç Kart Tarot Falı, geçmiş – şimdi – gelecek arasındaki enerjileri keşfetmek ve bir duruma daha geniş bir perspektiften bakmak için kullanılır. Bu yöntem, bir olayın gelişimini anlamana, sürecin neresinde olduğunu görmene ve olası yönleri keşfetmene yardımcı olur."
              instructions={formInstructions}
              additionalInfo={threeCardInfo}
            />

            {/* Card Selection Section */}
            <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Kartlarınızı Seçin (3/3)</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Aşağıdaki kartlardan 3 tanesini seçin veya rastgele seçim yapın
              </p>
              
              <div className="flex justify-center mb-4 sm:mb-6">
                <button
                  onClick={handleRandomSelect}
                  disabled={reading !== null}
                  className={`bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                    reading !== null ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  Benim Yerime Seç
                </button>
              </div>

              {/* Card Grid */}
              <CardGrid
                cards={cards}
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                loadingCards={loadingCards}
                reading={reading}
                maxSelection={3}
              />
            </div>

            {/* Selected Cards Display */}
            <SelectedCardDisplay
              cards={cards}
              selectedCards={selectedCards}
              cardOrientations={cardOrientations}
              getSelectedCardImage={getSelectedCardImage}
              getCardNameWithTranslation={getCardNameWithTranslation}
              getSelectedCardMeaning={getSelectedCardMeaning}
              isThreeCard={true}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              question={question}
              setModalConfig={setModalConfig}
              reading={reading}
            />

            {/* Reading Result */}
            <ReadingResult reading={reading} onReset={handleResetPage} />
          </div>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Modal */}
        <Modal
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
          title={modalConfig.title}
          message={modalConfig.message}
          type={modalConfig.type}
        />
      </div>
    );
} 