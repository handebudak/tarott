import { useState, useEffect } from "react";
import { shuffleArray, mapApiImageToPublicPath, getCardNameWithTranslation, getSelectedCardMeaning } from "../utils/cardUtils";
import { Card, UseTarotReadingProps, UseTarotReadingReturn, ModalConfig, ReadingType } from "../types";
import { TAROT_CARDS } from "../constants/cards";

export const useTarotReading = ({ enableReversed, type }: UseTarotReadingProps): UseTarotReadingReturn => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<string | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [originalCards, setOriginalCards] = useState<Card[]>([]);
  const [loadingCards, setLoadingCards] = useState(true);
  const [cardOrientations, setCardOrientations] = useState<boolean[]>([]);
  const [enableReversedState, setEnableReversedState] = useState(enableReversed);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    isOpen: false,
    title: '',
    message: '',
    type: 'warning'
  });

  // Kart bilgilerini yükle
  useEffect(() => {
    const loadCards = async () => {
      try {
        // Önce local kartları kullan
        setOriginalCards(TAROT_CARDS);
        
        // Kartları karıştır
        const shuffledCards = shuffleArray([...TAROT_CARDS]);
        setCards(shuffledCards);
        
        // Kartların yönlerini belirle (düz = false, ters = true)
        const orientations = shuffledCards.map(() => enableReversed && Math.random() > 0.5);
        setCardOrientations(orientations);
        
        // API'den de kartları almayı dene (opsiyonel)
        try {
          const response = await fetch('https://tarott-backend.onrender.com/api/cards');
          if (response.ok) {
            const apiCards = await response.json();
            setOriginalCards(apiCards);
            const shuffledApiCards = shuffleArray([...apiCards]);
            setCards(shuffledApiCards);
            
            const apiOrientations = shuffledApiCards.map(() => enableReversed && Math.random() > 0.5);
            setCardOrientations(apiOrientations);
          }
        } catch (error) {
          console.log('API kartları alınamadı, local kartlar kullanılıyor:', error);
        }
      } catch (error) {
        console.error('Kart bilgileri yüklenemedi:', error);
      } finally {
        setLoadingCards(false);
      }
    };

    loadCards();
  }, [enableReversed]);

  const handleCardSelect = (cardIndex: number) => {
    // Fal sonucu varsa kart seçimini engelle
    if (reading) return;
    
    if (type === 'single') {
      setSelectedCards([cardIndex]);
    } else {
      if (selectedCards.includes(cardIndex)) {
        setSelectedCards(selectedCards.filter(card => card !== cardIndex));
      } else if (selectedCards.length < 3) {
        setSelectedCards([...selectedCards, cardIndex]);
      }
    }
  };

  const handleRandomSelect = () => {
    // Fal sonucu varsa rastgele seçimi engelle
    if (reading) return;
    
    if (type === 'single') {
      const randomCard = Math.floor(Math.random() * cards.length);
      setSelectedCards([randomCard]);
    } else {
      const allCards = Array.from({ length: cards.length }, (_, i) => i);
      const shuffled = allCards.sort(() => 0.5 - Math.random());
      setSelectedCards(shuffled.slice(0, 3));
    }
  };

  const handleSubmit = async () => {
    const requiredCards = type === 'single' ? 1 : 3;
    
    if (!question || selectedCards.length !== requiredCards) {
      if (!question) {
        setModalConfig({
          isOpen: true,
          title: "Soru Gerekli",
          message: "Tarot falınızı baktırabilmek için lütfen sorunuz kısmına sorunuzu yazın. Bu, kartların size en doğru rehberliği sunabilmesi için önemlidir.",
          type: 'warning'
        });
        return;
      }
      if (selectedCards.length !== requiredCards) {
        setModalConfig({
          isOpen: true,
          title: "Kart Seçimi Gerekli",
          message: type === 'single' 
            ? "Lütfen tarot kartlarından birini seçin. Sezgilerinize güvenerek size en uygun kartı seçebilirsiniz."
            : "Üç kart tarot falı için tam olarak 3 kart seçmeniz gerekmektedir. Lütfen sezgilerinize güvenerek 3 kart seçin.",
          type: 'warning'
        });
        return;
      }
      return;
    }

    setIsLoading(true);
    setReading(null);

    try {
      // Seçilen kartların gerçek indekslerini bul
      const originalSelectedCards = selectedCards.map(selectedIndex => {
        const selectedCardData = cards[selectedIndex];
        const originalIndex = originalCards.findIndex((card: Card) => 
          card.name === selectedCardData.name && 
          card.turkish_name === selectedCardData.turkish_name
        );
        return originalIndex;
      });

      console.log('Seçilen kartların orijinal indeksleri:', originalSelectedCards);

      const response = await fetch('https://tarott-backend.onrender.com/api/tarot/reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          question,
          selectedCards: originalSelectedCards,
          cardOrientations: selectedCards.map(cardIndex => cardOrientations[cardIndex] || false),
          type
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API isteği başarısız oldu: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      setReading(data.reading || data.message);
      
    } catch (error) {
      console.error('API Error:', error);
      setModalConfig({
        isOpen: true,
        title: "Hata Oluştu",
        message: "Tarot falınız baktırılırken bir hata oluştu. Lütfen tekrar deneyiniz.",
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Seçilen kartın gerçek görselini al
  const getSelectedCardImage = (cardIndex: number) => {
    if (cards.length === 0) return null;
    
    const card = cards[cardIndex];
    if (!card) return null;
    
    console.log('Selected card:', card);
    
    // Kart görselini al
    const imagePath = mapApiImageToPublicPath(card);
    console.log('Mapped image path:', imagePath);
    
    return imagePath;
  };

  // Sayfayı yenile ve en üste kaydır
  const handleResetPage = () => {
    // Tüm state'leri sıfırla
    setName("");
    setQuestion("");
    setSelectedCards([]);
    setReading(null);
    setIsLoading(false);
    setEnableReversedState(enableReversed);
  };

  return {
    // State
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
    enableReversedState,
    modalConfig,
    setModalConfig,
    
    // Functions
    handleCardSelect,
    handleRandomSelect,
    handleSubmit,
    handleResetPage,
    getSelectedCardImage,
    getCardNameWithTranslation: (cardIndex: number) => getCardNameWithTranslation(cardIndex, cards),
    getSelectedCardMeaning: (cardIndex: number) => getSelectedCardMeaning(cardIndex, cards, cardOrientations),
  };
}; 