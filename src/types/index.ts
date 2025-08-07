// Tarot kartı temel tipi
export interface Card {
  id: number;
  name: string;
  turkish_name: string;
  number: number;
  suit: string;
  keywords: string[];
  meaning_upright: string;
  meaning_reversed: string;
  detailed_meaning: string;
  advice: string;
  symbolism: string;
  image: string;
  imagePath?: string;
  category?: string;
}

// Fal türleri
export type ReadingType = 'single' | 'three';

// Kart yönü (düz/ters)
export type CardOrientation = boolean; // false = düz, true = ters

// Fal sonucu
export interface ReadingResult {
  reading: string;
  message?: string;
}

// Modal konfigürasyonu
export interface ModalConfig {
  isOpen: boolean;
  title: string;
  message: string;
  type: 'warning' | 'error' | 'info';
}

// Hook props
export interface UseTarotReadingProps {
  enableReversed: boolean;
  type: ReadingType;
}

// Hook return değerleri
export interface UseTarotReadingReturn {
  // State
  name: string;
  setName: (name: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  selectedCards: number[];
  cards: Card[];
  loadingCards: boolean;
  isLoading: boolean;
  reading: string | null;
  cardOrientations: CardOrientation[];
  enableReversedState: boolean;
  modalConfig: ModalConfig;
  setModalConfig: (config: ModalConfig) => void;
  
  // Functions
  handleCardSelect: (cardIndex: number) => void;
  handleRandomSelect: () => void;
  handleSubmit: () => Promise<void>;
  handleResetPage: () => void;
  getSelectedCardImage: (cardIndex: number) => string;
  getCardNameWithTranslation: (cardIndex: number) => string;
  getSelectedCardMeaning: (cardIndex: number) => string;
}

// Navigation tipleri
export type RootStackParamList = {
  Home: undefined;
  SingleCard: undefined;
  ThreeCard: undefined;
  CardLibrary: undefined;
  About: undefined;
  Privacy: undefined;
  Terms: undefined;
};

// API request tipleri
export interface TarotReadingRequest {
  name: string;
  question: string;
  selectedCards: number[];
  cardOrientations: CardOrientation[];
  type: ReadingType;
}

// API response tipleri
export interface TarotReadingResponse {
  reading?: string;
  message?: string;
  error?: string;
}

// Kart seçimi için props
export interface CardGridProps {
  cards: Card[];
  selectedCards: number[];
  onCardSelect: (cardIndex: number) => void;
  loadingCards: boolean;
  cardOrientations: CardOrientation[];
}

// Seçilen kart gösterimi için props
export interface SelectedCardDisplayProps {
  selectedCards: number[];
  cards: Card[];
  cardOrientations: CardOrientation[];
  type: ReadingType;
}

// Fal sonucu için props
export interface ReadingResultProps {
  reading: string | null;
  isLoading: boolean;
  onReset: () => void;
}

// Form bölümü için props
export interface FormSectionProps {
  name: string;
  setName: (name: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  onSubmit: () => Promise<void>;
  isLoading: boolean;
  selectedCards: number[];
  type: ReadingType;
  onRandomSelect: () => void;
} 