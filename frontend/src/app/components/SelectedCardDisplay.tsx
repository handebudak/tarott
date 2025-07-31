import Image from "next/image";

interface Card {
  id: number;
  name: string;
  imagePath: string;
  category: string;
}

interface SelectedCardDisplayProps {
  cards: Card[];
  selectedCards: number[];
  cardOrientations: boolean[];
  getSelectedCardImage: (cardIndex: number) => string;
  getCardNameWithTranslation: (cardIndex: number) => string;
  getSelectedCardMeaning: (cardIndex: number) => { meaning: string; isReversed: boolean } | null;
  isThreeCard?: boolean;
  onSubmit?: () => void;
  isLoading?: boolean;
  question?: string;
  setModalConfig?: (config: { isOpen: boolean; title: string; message: string; type: 'info' | 'warning' | 'error' }) => void;
  reading?: string | null;
}

export default function SelectedCardDisplay({
  cards,
  selectedCards,
  cardOrientations,
  getSelectedCardImage,
  getCardNameWithTranslation,
  getSelectedCardMeaning,
  isThreeCard = false,
  onSubmit,
  isLoading = false,
  question,
  setModalConfig,
  reading
}: SelectedCardDisplayProps) {
  const getSelectedCardImageWithRotation = (cardIndex: number) => {
    const imagePath = getSelectedCardImage(cardIndex);
    const isReversed = cardOrientations[cardIndex] || false;
    
    return {
      src: imagePath,
      className: `object-contain rounded-lg ${isReversed ? 'rotate-180' : ''}`
    };
  };

  const getPositionLabel = (index: number) => {
    if (!isThreeCard) return null;
    const positions = ["🕰️ Geçmiş", "⚡ Şimdi", "🔮 Gelecek"];
    return positions[index] || "";
  };

  if (selectedCards.length === 0) return null;

  if (isThreeCard) {
    return (
      <div className="mt-6 sm:mt-8 bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6" data-selected-cards-section>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Seçilen Kartlar ({selectedCards.length}/3)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedCards.map((cardIndex, index) => (
            <div key={cardIndex} className="bg-black/20 rounded-lg p-3 sm:p-4">
              <div className="text-center mb-3">
                <div className="aspect-[3/4] w-28 sm:w-36 h-36 sm:h-48 relative mx-auto mb-2 sm:mb-3">
                  <Image
                    src={getSelectedCardImageWithRotation(cardIndex).src}
                    alt={getCardNameWithTranslation(cardIndex)}
                    fill
                    className={getSelectedCardImageWithRotation(cardIndex).className}
                  />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-lg mb-1">
                  {getCardNameWithTranslation(cardIndex)}
                  {getSelectedCardMeaning(cardIndex)?.isReversed && (
                    <span className="ml-1 text-amber-400 text-xs sm:text-sm">🔄</span>
                  )}
                </h3>
                <div className="text-amber-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                  {getPositionLabel(index)}
                </div>
              </div>
              
              {/* API card information */}
              {cards[cardIndex] && (
                <div className="space-y-2">
                  {/* Selected card meaning (upright/reversed) */}
                  {getSelectedCardMeaning(cardIndex) && (
                    <div>
                                             <h4 className="text-amber-400 font-semibold text-xs mb-1">
                         {getSelectedCardMeaning(cardIndex)?.isReversed ? '🔄 Ters Pozisyon' : '✨ Düz Pozisyon'}
                       </h4>
                      <p className="text-gray-200 text-xs leading-relaxed">
                        {getSelectedCardMeaning(cardIndex)?.meaning}
                      </p>
                    </div>
                  )}
                  
                  {/* Detailed Meaning */}
                  {cards[cardIndex]?.detailed_meaning && (
                    <div>
                      <h4 className="text-amber-400 font-semibold text-xs mb-1">📖 Detaylı Anlam</h4>
                      <p className="text-gray-200 text-xs leading-relaxed">
                        {cards[cardIndex].detailed_meaning}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Submit Button */}
        {onSubmit && selectedCards.length === 3 && !reading && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                if (!question?.trim()) {
                  setModalConfig && setModalConfig({
                    isOpen: true,
                    title: "Soru Gerekli",
                    message: "Tarot falınızı baktırabilmek için lütfen sorunuz kısmına sorunuzu yazın. Bu, kartların size en doğru rehberliği sunabilmesi için önemlidir.",
                    type: 'warning'
                  });
                  return;
                }
                onSubmit && onSubmit();
              }}
              disabled={isLoading}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              {isLoading ? "🔮 Falınız Hazırlanıyor..." : "🔮 Falıma Bak"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Tek kart gösterimi
  const cardIndex = selectedCards[0];
  return (
    <div className="mt-6 sm:mt-8 bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6" data-selected-card-section>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">🎴 Seçilen Kartınız</h3>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                 <div className="w-full lg:w-64 h-80 lg:h-80 relative flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src={getSelectedCardImageWithRotation(cardIndex).src}
            alt={getCardNameWithTranslation(cardIndex)}
            fill
            className={getSelectedCardImageWithRotation(cardIndex).className}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
            {getCardNameWithTranslation(cardIndex)}
            {getSelectedCardMeaning(cardIndex)?.isReversed && (
              <span className="ml-2 text-amber-400 text-base sm:text-lg">🔄 (Ters)</span>
            )}
          </h4>
          
          {/* API card information */}
          {cards[cardIndex] && (
            <div className="space-y-3">
              {/* Selected card meaning (upright/reversed) */}
              {getSelectedCardMeaning(cardIndex) && (
                <div>
                                     <h5 className="text-amber-400 font-semibold text-sm mb-1">
                     {getSelectedCardMeaning(cardIndex)?.isReversed ? '🔄 Ters Pozisyon Anlamı' : '✨ Düz Pozisyon Anlamı'}
                   </h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {getSelectedCardMeaning(cardIndex)?.meaning}
                  </p>
                </div>
              )}
              
              {/* Detailed Meaning */}
              {cards[cardIndex]?.detailed_meaning ? (
                <div>
                  <h5 className="text-amber-400 font-semibold text-sm mb-1">📖 Detaylı Anlam</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {cards[cardIndex].detailed_meaning}
                  </p>
                </div>
              ) : (
                 <div>
                   <h5 className="text-amber-400 font-semibold text-sm mb-1">📖 Detaylı Anlam</h5>
                   <p className="text-gray-200 text-sm leading-relaxed">
                     Bu kart için detaylı anlam bilgisi mevcut değil.
                   </p>
                 </div>
               )}
            </div>
          )}
        </div>
      </div>
      
      {/* Submit Button */}
      {onSubmit && selectedCards.length === 1 && !reading && (
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              if (!question?.trim()) {
                setModalConfig && setModalConfig({
                  isOpen: true,
                  title: "Soru Gerekli",
                  message: "Tarot falınızı baktırabilmek için lütfen sorunuz kısmına sorunuzu yazın. Bu, kartların size en doğru rehberliği sunabilmesi için önemlidir.",
                  type: 'warning'
                });
                return;
              }
              onSubmit && onSubmit();
            }}
            disabled={isLoading}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {isLoading ? "🔮 Falınız Hazırlanıyor..." : "🔮 Falıma Bak"}
          </button>
        </div>
      )}
    </div>
  );
} 