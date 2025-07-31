interface Card {
  id: number;
  name: string;
  imagePath: string;
  category: string;
}

// Diziyi karıştıran fonksiyon
export const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// API'den gelen kart bilgisini public klasöründeki dosya yoluna çevir
export const mapApiImageToPublicPath = (card: Card) => {
  // API'den gelen image alanını kontrol et (imagePath değil, image!)
  const imagePath = (card as any).image || card.imagePath;
  
  if (!imagePath) return "/card-bg.png";
  
  // API'den gelen path'i analiz et
  console.log('API image path:', imagePath);
  
  // Eğer zaten doğru formattaysa kullan
  if (imagePath.startsWith('/card/')) {
    return imagePath;
  }
  
  // Kategoriye göre path oluştur
  switch (card.category) {
    case 'Major Arcana':
    case 'Major-Arcana':
      // The Fool için özel durum (ID 0)
      if (card.name === "The Fool") {
        return `/card/Major-Arcana/RWS_Tarot_00_Fool.jpg`;
      }
      return `/card/Major-Arcana/RWS_Tarot_${card.id.toString().padStart(2, '0')}_${card.name.replace(/\s+/g, '_')}.jpg`;
    case 'Swords':
      return `/card/Swords/Swords${card.id.toString().padStart(2, '0')}.jpg`;
    case 'Cups':
      return `/card/Cups/Cups${card.id.toString().padStart(2, '0')}.jpg`;
    case 'Pentacles':
      return `/card/Pentacles/Pents${card.id.toString().padStart(2, '0')}.jpg`;
    case 'Wands':
      return `/card/Minor-Arcana-Wands/Wands${card.id.toString().padStart(2, '0')}.jpg`;
    default:
      return "/card-bg.png";
  }
};

// Kart ismini al
export const getCardName = (cardIndex: number, cards: Card[]) => {
  if (cards.length === 0) return `Kart ${cardIndex + 1}`;
  
  const card = cards[cardIndex];
  if (!card) return `Kart ${cardIndex + 1}`;
  
  return card.name;
};

// Kart ismini Türkçe çevir
export const getCardNameWithTranslation = (cardIndex: number, cards: Card[]) => {
  if (cards.length === 0) return "Kart";
  
  const card = cards[cardIndex];
  if (!card) return "Kart";
  
  const englishName = card.name;
  // API'den gelen turkish_name alanını kullan, yoksa manuel çeviri yap
  const turkishName = (card as any).turkish_name || getTurkishCardName(englishName);
  
  return `${englishName} (${turkishName})`;
};

// İngilizce kart ismini Türkçe'ye çevir
export const getTurkishCardName = (englishName: string) => {
  const translations: { [key: string]: string } = {
    // Major Arcana
    "The Fool": "Deli",
    "The Magician": "Sihirbaz",
    "The High Priestess": "Yüksek Rahibe",
    "The Empress": "İmparatoriçe",
    "The Emperor": "İmparator",
    "The Hierophant": "Hierofant",
    "The Lovers": "Aşıklar",
    "The Chariot": "Savaş Arabası",
    "Strength": "Güç",
    "The Hermit": "Münzevi",
    "Wheel of Fortune": "Şans Çarkı",
    "Justice": "Adalet",
    "The Hanged Man": "Asılı Adam",
    "Death": "Ölüm",
    "Temperance": "Ölçülülük",
    "The Devil": "Şeytan",
    "The Tower": "Kule",
    "The Star": "Yıldız",
    "The Moon": "Ay",
    "The Sun": "Güneş",
    "Judgement": "Yargı",
    "The World": "Dünya",
    
    // Minor Arcana - Swords
    "Ace of Swords": "Kılıçlar Ası",
    "Two of Swords": "Kılıçlar İkili",
    "Three of Swords": "Kılıçlar Üçlü",
    "Four of Swords": "Kılıçlar Dörtlü",
    "Five of Swords": "Kılıçlar Beşli",
    "Six of Swords": "Kılıçlar Altılı",
    "Seven of Swords": "Kılıçlar Yedili",
    "Eight of Swords": "Kılıçlar Sekizli",
    "Nine of Swords": "Kılıçlar Dokuzlu",
    "Ten of Swords": "Kılıçlar Onlu",
    "Page of Swords": "Kılıçlar Uşak",
    "Knight of Swords": "Kılıçlar Şövalye",
    "Queen of Swords": "Kılıçlar Kraliçe",
    "King of Swords": "Kılıçlar Kral",
    
    // Minor Arcana - Cups
    "Ace of Cups": "Kupa Ası",
    "Two of Cups": "Kupa İkili",
    "Three of Cups": "Kupa Üçlü",
    "Four of Cups": "Kupa Dörtlü",
    "Five of Cups": "Kupa Beşli",
    "Six of Cups": "Kupa Altılı",
    "Seven of Cups": "Kupa Yedili",
    "Eight of Cups": "Kupa Sekizli",
    "Nine of Cups": "Kupa Dokuzlu",
    "Ten of Cups": "Kupa Onlu",
    "Page of Cups": "Kupa Uşak",
    "Knight of Cups": "Kupa Şövalye",
    "Queen of Cups": "Kupa Kraliçe",
    "King of Cups": "Kupa Kral",
    
    // Minor Arcana - Pentacles
    "Ace of Pentacles": "Para Ası",
    "Two of Pentacles": "Para İkili",
    "Three of Pentacles": "Para Üçlü",
    "Four of Pentacles": "Para Dörtlü",
    "Five of Pentacles": "Para Beşli",
    "Six of Pentacles": "Para Altılı",
    "Seven of Pentacles": "Para Yedili",
    "Eight of Pentacles": "Para Sekizli",
    "Nine of Pentacles": "Para Dokuzlu",
    "Ten of Pentacles": "Para Onlu",
    "Page of Pentacles": "Para Uşak",
    "Knight of Pentacles": "Para Şövalye",
    "Queen of Pentacles": "Para Kraliçe",
    "King of Pentacles": "Para Kral",
    
    // Minor Arcana - Wands
    "Ace of Wands": "Değnek Ası",
    "Two of Wands": "Değnek İkili",
    "Three of Wands": "Değnek Üçlü",
    "Four of Wands": "Değnek Dörtlü",
    "Five of Wands": "Değnek Beşli",
    "Six of Wands": "Değnek Altılı",
    "Seven of Wands": "Değnek Yedili",
    "Eight of Wands": "Değnek Sekizli",
    "Nine of Wands": "Değnek Dokuzlu",
    "Ten of Wands": "Değnek Onlu",
    "Page of Wands": "Değnek Uşak",
    "Knight of Wands": "Değnek Şövalye",
    "Queen of Wands": "Değnek Kraliçe",
    "King of Wands": "Değnek Kral"
  };
  
  return translations[englishName] || englishName;
};

// Seçilen kartın anlamını al (düz/ters durumuna göre)
export const getSelectedCardMeaning = (cardIndex: number, cards: Card[], cardOrientations: boolean[]) => {
  if (cards.length === 0) return null;
  
  const card = cards[cardIndex];
  if (!card) return null;
  
  const isReversed = cardOrientations[cardIndex] || false;
  
  return {
    meaning: isReversed ? (card as any).meaning_reversed : (card as any).meaning_upright,
    isReversed: isReversed
  };
}; 