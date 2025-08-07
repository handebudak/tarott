import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TAROTT_BACKGROUND, TAROT_CARDS, CARD_IMAGE_MAPPING } from '../constants/cards';
import { Card } from '../types';
import { getCardCategory, getCardKeywords, getCardDetailedMeaning, getCardAdvice, getCardSymbolism } from '../utils/cardUtils';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 60) / 3;

export const CardLibraryScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'Major Arcana', name: 'Major Arcana' },
    { id: 'Cups', name: 'Kupalar' },
    { id: 'Wands', name: 'Değnekler' },
    { id: 'Swords', name: 'Kılıçlar' },
    { id: 'Pentacles', name: 'Para' },
  ];

  const filteredCards = TAROT_CARDS.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.turkish_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || card.suit === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCardImage = (card: Card) => {
    return CARD_IMAGE_MAPPING[card.name] || require('../../assets/cards/card-bg.png');
  };

  const handleCardPress = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseCardDetail = () => {
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      {/* Arka plan görseli */}
      <Image 
        source={TAROTT_BACKGROUND} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Header */}
      <Header title="Kart Kütüphanesi" />

      {/* Ana içerik */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Arama ve filtreleme */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Kart ara..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Kategori filtreleri */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategoryButton
              ]}
              onPress={() => setSelectedCategory(category.id)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategory === category.id && styles.selectedCategoryButtonText
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Kart listesi */}
        <View style={styles.cardsContainer}>
          <Text style={styles.sectionTitle}>
            {filteredCards.length} kart bulundu
          </Text>
          
          <View style={styles.cardsGrid}>
            {filteredCards.map((card, index) => (
              <TouchableOpacity
                key={`${card.name}-${index}`}
                style={styles.cardItem}
                onPress={() => handleCardPress(card)}
                activeOpacity={0.8}
              >
                <Image
                  source={getCardImage(card)}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardName} numberOfLines={2}>
                    {card.turkish_name}
                  </Text>
                  <Text style={styles.cardCategory}>
                    {getCardCategory(card)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />

      {/* Kart detay modalı */}
      {selectedCard && (
        <View style={styles.modalOverlay}>
          <ScrollView style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedCard.turkish_name}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseCardDetail}
                activeOpacity={0.7}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardDetailContainer}>
              <Image
                source={getCardImage(selectedCard)}
                style={styles.detailCardImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Kategori</Text>
              <Text style={styles.detailText}>{getCardCategory(selectedCard)}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Anahtar Kelimeler</Text>
              <View style={styles.keywordsContainer}>
                {getCardKeywords(selectedCard).map((keyword, index) => (
                  <View key={index} style={styles.keywordTag}>
                    <Text style={styles.keywordText}>{keyword}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Düz Anlam</Text>
              <Text style={styles.detailText}>{selectedCard.meaning_upright}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Ters Anlam</Text>
              <Text style={styles.detailText}>{selectedCard.meaning_reversed}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Detaylı Açıklama</Text>
              <Text style={styles.detailText}>{getCardDetailedMeaning(selectedCard)}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Tavsiye</Text>
              <Text style={styles.detailText}>{getCardAdvice(selectedCard)}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Sembolizm</Text>
              <Text style={styles.detailText}>{getCardSymbolism(selectedCard)}</Text>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: '100%',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  categoryContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryContent: {
    gap: 8,
  },
  categoryButton: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.5)',
  },
  selectedCategoryButton: {
    backgroundColor: '#f59e0b',
  },
  categoryButtonText: {
    color: '#f59e0b',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCategoryButtonText: {
    color: '#ffffff',
  },
  cardsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f59e0b',
    textAlign: 'center',
    marginBottom: 16,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardItem: {
    width: CARD_SIZE,
    height: CARD_SIZE * 1.4,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  cardImage: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
  cardInfo: {
    padding: 8,
    alignItems: 'center',
  },
  cardName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 14,
  },
  cardCategory: {
    color: '#f59e0b',
    fontSize: 10,
    marginTop: 2,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    maxHeight: '90%',
    width: '100%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  closeButton: {
    backgroundColor: '#ef4444',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetailContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailCardImage: {
    width: 120,
    height: 168,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f59e0b',
  },
  detailSection: {
    marginBottom: 16,
  },
  detailSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#e5e7eb',
    lineHeight: 20,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  keywordTag: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.5)',
  },
  keywordText: {
    color: '#f59e0b',
    fontSize: 12,
    fontWeight: '600',
  },
}); 