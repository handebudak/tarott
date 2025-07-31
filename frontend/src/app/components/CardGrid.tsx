import Image from "next/image";

interface Card {
  id: number;
  name: string;
  image: string;
}

interface CardGridProps {
  cards: Card[];
  selectedCards: number[];
  onCardSelect: (cardIndex: number) => void;
  loadingCards: boolean;
  reading: string | null;
  maxSelection?: number;
}

export default function CardGrid({ 
  selectedCards, 
  onCardSelect, 
  loadingCards, 
  reading,
  maxSelection = 1
}: CardGridProps) {
  const isCardSelected = (cardIndex: number) => {
    return selectedCards.includes(cardIndex);
  };

  const canSelectCard = (cardIndex: number) => {
    if (reading !== null) return false;
    if (maxSelection === 1) return true;
    return selectedCards.length < maxSelection || selectedCards.includes(cardIndex);
  };

  const getCardImage = (cardIndex: number) => {
    return "/card-bg.png";
  };

  if (loadingCards) {
    return (
      <div className="text-center py-8">
        <div className="text-white text-sm sm:text-base">Kartlar yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {/* First 6 rows (72 cards) */}
      <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-1">
        {Array.from({ length: 72 }, (_, i) => (
          <div
            key={i}
            onClick={() => canSelectCard(i) && onCardSelect(i)}
            className={`
              aspect-[2/3] border rounded transition-all duration-300 transform relative overflow-hidden
              ${reading !== null 
                ? 'cursor-not-allowed opacity-50' 
                : canSelectCard(i) ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-50'
              }
              ${isCardSelected(i) 
                ? 'border-amber-500 shadow-lg shadow-amber-500/50' 
                : 'border-amber-500/50 hover:border-amber-400'
              }
            `}
          >
            <Image
              src={getCardImage(i)}
              alt={`Card ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Last row (6 cards) - centered */}
      <div className="grid grid-cols-12 gap-1">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`
              ${i < 3 || i >= 9 ? 'invisible' : ''}
              ${i >= 3 && i < 9 ? `aspect-[2/3] border rounded transition-all duration-300 transform relative overflow-hidden ${reading !== null ? 'cursor-not-allowed opacity-50' : canSelectCard(i - 3 + 72) ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-50'}` : ''}
              ${i >= 3 && i < 9 ? (isCardSelected(i - 3 + 72)
                ? 'border-amber-500 shadow-lg shadow-amber-500/50' 
                : 'border-amber-500/50 hover:border-amber-400'
              ) : ''}
            `}
            onClick={i >= 3 && i < 9 && canSelectCard(i - 3 + 72) && reading === null ? () => onCardSelect(i - 3 + 72) : undefined}
          >
            {i >= 3 && i < 9 && (
              <Image
                src={getCardImage(i - 3 + 72)}
                alt={`Card ${i - 3 + 72 + 1}`}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 