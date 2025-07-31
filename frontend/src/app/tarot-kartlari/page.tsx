"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import { mapApiImageToPublicPath } from "../utils/cardUtils";

interface Card {
  id?: number;
  name: string;
  imagePath?: string;
  category?: string;
  turkish_name?: string;
  number?: number;
  suit?: string;
  keywords?: string[];
  meaning_upright?: string;
  meaning_reversed?: string;
  detailed_meaning?: string;
  advice?: string;
  symbolism?: string;
  image?: string;
}

export default function TarotKartlari() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards');
        if (response.ok) {
          const data = await response.json();
          setCards(data);
        }
      } catch (error) {
        console.error('Kart bilgileri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const categories = [
    { id: "all", name: "Tüm Kartlar" },
    { id: "Major Arcana", name: "Büyük Arkana" },
    { id: "Cups", name: "Kupa" },
    { id: "Wands", name: "Asa" },
    { id: "Swords", name: "Kılıç" },
    { id: "Pentacles", name: "Para" }
  ];

  const filteredCards = selectedCategory === "all" 
    ? cards 
    : cards.filter(card => {
        if (!card.suit) return false;
        
        return card.suit === selectedCategory;
      });

  const getCardImagePath = (card: Card) => {
    // API'den gelen kartı cardUtils formatına çevir
    const cardForUtils = {
      id: card.id || 0,
      name: card.name,
      imagePath: card.imagePath || card.image || '',
      category: card.category || card.suit || 'Major Arcana'
    };
    return mapApiImageToPublicPath(cardForUtils);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <BackgroundImage />
        <Header showBackButton={true} showAllButtons={true} />
        <main className="flex-1 relative container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto"></div>
            <p className="mt-4">Kartlar yükleniyor...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Tarot Kartları ve Anlamları",
            "description": "78 tarot kartının detaylı anlamları ve yorumları",
            "url": "https://tarott.com/tarot-kartlari",
            "numberOfItems": cards.length,
            "itemListElement": cards.slice(0, 10).map((card, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": card.turkish_name || card.name,
                "description": card.meaning_upright || card.detailed_meaning,
                "image": getCardImagePath(card)
              }
            }))
          })
        }}
      />

      <BackgroundImage />
      {/* Header */}
      <Header showBackButton={true} showAllButtons={true} />

      <main className="flex-1 relative container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Tarot Kartları ve Anlamları
            </span>
          </h1>

          {/* Category Filter */}
          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                      : 'bg-black/50 text-gray-300 hover:text-white hover:bg-black/70'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredCards.map((card, index) => (
              <div key={`${card.name}-${card.suit}-${index}`} className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 hover:border-amber-400/50 transition-all duration-300">
                <div className="aspect-[3/4] w-full relative mb-3">
                  <Image
                    src={getCardImagePath(card)}
                    alt={card.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain rounded-lg"
                  />
                </div>
                
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 text-center">
                  {card.name} {card.turkish_name && `(${card.turkish_name})`}
                </h3>
                
                <div className="space-y-2">
                  {card.detailed_meaning && (
                    <div>
                      <h4 className="text-amber-400 font-medium text-xs mb-1">Detaylı Anlam:</h4>
                      <p className="text-gray-200 text-xs leading-relaxed">
                        {card.detailed_meaning}
                      </p>
                    </div>
                  )}
                  
                  {card.keywords && card.keywords.length > 0 && (
                    <div>
                      <h4 className="text-amber-400 font-medium text-xs mb-1">Anahtar Kelimeler:</h4>
                      <p className="text-gray-200 text-xs">
                        {card.keywords.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center text-white py-8">
              <p>Bu kategoride kart bulunamadı.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 