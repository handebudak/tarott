import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Header } from '../components/Header';
import { CardGrid } from '../components/CardGrid';
import { SelectedCardDisplay } from '../components/SelectedCardDisplay';
import { FormSection } from '../components/FormSection';
import { ReadingResult } from '../components/ReadingResult';
import { Modal } from '../components/Modal';
import { useTarotReading } from '../hooks/useTarotReading';
import { TAROTT_BACKGROUND } from '../constants/cards';

const { width, height } = Dimensions.get('window');

export const ThreeCardScreen: React.FC = () => {
  const {
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
    modalConfig,
    setModalConfig,
    
    // Functions
    handleCardSelect,
    handleRandomSelect,
    handleSubmit,
    handleResetPage,
  } = useTarotReading({ enableReversed: true, type: 'three' });

  const handleModalClose = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
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
      <Header title="Üç Kart Falı" />

      {/* Ana içerik */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Fal sonucu varsa sonucu göster */}
        {reading ? (
          <ReadingResult
            reading={reading}
            isLoading={isLoading}
            onReset={handleResetPage}
          />
        ) : (
          <>
            {/* Açıklama */}
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Üç Kart Falı</Text>
              <Text style={styles.infoText}>
                Geçmiş, şimdi ve geleceğinizi keşfedin. Üç kart seçerek 
                detaylı bir analiz alın. Her kart farklı bir zaman dilimini temsil eder.
              </Text>
              <View style={styles.positionInfo}>
                <Text style={styles.positionTitle}>Kart Pozisyonları:</Text>
                <Text style={styles.positionText}>1. Kart: Geçmiş</Text>
                <Text style={styles.positionText}>2. Kart: Şimdi</Text>
                <Text style={styles.positionText}>3. Kart: Gelecek</Text>
              </View>
            </View>

            {/* Kart seçimi */}
            <View style={styles.section}>
              <CardGrid
                cards={cards}
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                loadingCards={loadingCards}
                cardOrientations={cardOrientations}
              />
            </View>

            {/* Seçilen kart gösterimi */}
            {selectedCards.length > 0 && (
              <View style={styles.section}>
                <SelectedCardDisplay
                  selectedCards={selectedCards}
                  cards={cards}
                  cardOrientations={cardOrientations}
                  type="three"
                />
              </View>
            )}

            {/* Form bölümü */}
            <View style={styles.section}>
              <FormSection
                name={name}
                setName={setName}
                question={question}
                setQuestion={setQuestion}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                selectedCards={selectedCards}
                type="three"
                onRandomSelect={handleRandomSelect}
              />
            </View>
          </>
        )}
      </ScrollView>

      {/* Modal */}
      <Modal config={modalConfig} onClose={handleModalClose} />
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
    height: height,
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
  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f59e0b',
    textAlign: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  positionInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 12,
    padding: 16,
  },
  positionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  positionText: {
    fontSize: 14,
    color: '#d1d5db',
    textAlign: 'center',
    marginBottom: 4,
  },
  section: {
    marginBottom: 20,
  },
}); 