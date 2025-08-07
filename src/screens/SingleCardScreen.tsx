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

export const SingleCardScreen: React.FC = () => {
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
  } = useTarotReading({ enableReversed: true, type: 'single' });

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
      <Header title="Tek Kart Falı" />

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
                  type="single"
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
                type="single"
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
  section: {
    marginBottom: 20,
  },
}); 