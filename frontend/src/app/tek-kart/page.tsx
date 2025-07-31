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

export default function TekKartPage() {
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
  } = useTarotReading({ enableReversed, type: 'single' });

  // Özelleştirilmiş reset fonksiyonu
  const handleResetPage = () => {
    setEnableReversed(false); // Ters kart seçeneğini kapat
    originalHandleResetPage(); // Orijinal reset fonksiyonunu çağır
  };

  const formInstructions = [
    "✨ Lütfen birkaç saniye gözlerini kapat, derin bir nefes al...",
    "✨ İçinden bir niyet tut ya da aklında bir soru belirle.",
    "Bu bir kişiyle ilgili olabilir, bir durumla ilgili olabilir ya da sadece \"bugün bana ne mesajın var?\" gibi genel bir rehberlik isteği de olabilir.",
    "Kartını seçtiğinde, sezgilerine güven ve evrenin seninle konuşmasına izin ver 💫"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Tek Kart Tarot Falı",
            "description": "Tek kart tarot falı ile hızlı ve etkili rehberlik alma hizmeti",
            "url": "https://tarott.com/tek-kart",
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
              Tek Kart Tarot Falı
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
            title="🔮 Tek Kart Tarot Falı Nedir?"
            description="Tek Kart Tarot Falı, hızlı ve etkili bir şekilde rehberlik almak isteyenler için ideal bir tarot yöntemidir. Bu fal, tek bir kartla o anki enerji alanını yansıtır ve sana evrenin mesajını sunar. Karar aşamasında, kafa karışıklığında ya da sadece içgörü ararken kullanılır."
            instructions={formInstructions}
          />

          {/* Card Selection Section */}
          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Kartınızı Seçin</h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Aşağıdaki kartlardan birini seçin veya rastgele seçim yapın
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
              maxSelection={1}
            />
          </div>

          {/* Selected Card */}
          <SelectedCardDisplay
            cards={cards}
            selectedCards={selectedCards}
            cardOrientations={cardOrientations}
            getSelectedCardImage={getSelectedCardImage}
            getCardNameWithTranslation={getCardNameWithTranslation}
            getSelectedCardMeaning={getSelectedCardMeaning}
            isThreeCard={false}
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