import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TAROTT_BACKGROUND, TAROTT_LOGO } from '../constants/cards';

const { width, height } = Dimensions.get('window');

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
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
      <Header showAllButtons={false} title="Tarott" />

      {/* Ana içerik */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Logo ve başlık */}
        <View style={styles.heroSection}>
          <Image source={TAROTT_LOGO} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Tarott</Text>
          <Text style={styles.subtitle}>
            Yapay zeka destekli tarot falı uygulaması
          </Text>
        </View>

        {/* Açıklama */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Sezgilerinize güvenerek tarot kartlarını seçin ve AI teknolojisi ile 
            özel olarak hazırlanmış falınızı alın. Geçmiş, şimdi ve geleceğiniz 
            hakkında içgörüler kazanın.
          </Text>
        </View>

        {/* Fal türleri */}
        <View style={styles.readingTypesContainer}>
          <Text style={styles.sectionTitle}>Fal Türleri</Text>
          
          <View style={styles.readingTypes}>
            {/* Tek Kart Falı */}
            <TouchableOpacity
              style={styles.readingTypeCard}
              onPress={() => handleNavigation('SingleCard')}
              activeOpacity={0.8}
            >
              <View style={styles.cardIcon}>🔮</View>
              <Text style={styles.cardTitle}>Tek Kart Falı</Text>
              <Text style={styles.cardDescription}>
                Hızlı ve net cevaplar için ideal. Günlük rehberlik ve 
                anlık sorularınız için mükemmel.
              </Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>Hızlı</Text>
              </View>
            </TouchableOpacity>

            {/* Üç Kart Falı */}
            <TouchableOpacity
              style={styles.readingTypeCard}
              onPress={() => handleNavigation('ThreeCard')}
              activeOpacity={0.8}
            >
              <View style={styles.cardIcon}>✨</View>
              <Text style={styles.cardTitle}>Üç Kart Falı</Text>
              <Text style={styles.cardDescription}>
                Geçmiş, şimdi ve gelecek. Detaylı analiz ve 
                kapsamlı rehberlik için en iyi seçim.
              </Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>Detaylı</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Özellikler */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Özellikler</Text>
          
          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🤖</Text>
              <Text style={styles.featureTitle}>AI Teknolojisi</Text>
              <Text style={styles.featureText}>
                Yapay zeka ile özel olarak hazırlanmış yorumlar
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎴</Text>
              <Text style={styles.featureTitle}>78 Tarot Kartı</Text>
              <Text style={styles.featureText}>
                Major ve Minor Arcana kartlarının tam koleksiyonu
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔄</Text>
              <Text style={styles.featureTitle}>Ters Kartlar</Text>
              <Text style={styles.featureText}>
                Kartların düz ve ters pozisyonlarını destekler
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📱</Text>
              <Text style={styles.featureTitle}>Mobil Uyumlu</Text>
              <Text style={styles.featureText}>
                Her cihazda mükemmel deneyim
              </Text>
            </View>
          </View>
        </View>

        {/* Hızlı başlangıç */}
        <View style={styles.quickStartContainer}>
          <Text style={styles.sectionTitle}>Hızlı Başlangıç</Text>
          <Text style={styles.quickStartText}>
            Hemen fal baktırmaya başlamak için aşağıdaki seçeneklerden birini seçin:
          </Text>
          
          <View style={styles.quickStartButtons}>
            <TouchableOpacity
              style={styles.quickStartButton}
              onPress={() => handleNavigation('SingleCard')}
              activeOpacity={0.7}
            >
              <Text style={styles.quickStartButtonText}>Tek Kart Falı</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickStartButton}
              onPress={() => handleNavigation('ThreeCard')}
              activeOpacity={0.7}
            >
              <Text style={styles.quickStartButtonText}>Üç Kart Falı</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Uyarı */}
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerTitle}>⚠️ Önemli Uyarı</Text>
          <Text style={styles.disclaimerText}>
            Bu uygulama eğlence amaçlıdır. Fal sonuçları gerçek hayat kararlarınızı 
            etkilememelidir. Önemli kararlar için profesyonel danışmanlık almanızı öneririz.
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />
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
  scrollContent: {
    paddingBottom: 20,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  descriptionText: {
    fontSize: 16,
    color: '#d1d5db',
    textAlign: 'center',
    lineHeight: 24,
  },
  readingTypesContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f59e0b',
    textAlign: 'center',
    marginBottom: 20,
  },
  readingTypes: {
    gap: 16,
  },
  readingTypeCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    position: 'relative',
  },
  cardIcon: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#d1d5db',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#f59e0b',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featuresContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  features: {
    gap: 16,
  },
  featureItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  featureText: {
    fontSize: 12,
    color: '#d1d5db',
    textAlign: 'center',
    lineHeight: 16,
  },
  quickStartContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  quickStartText: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  quickStartButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  quickStartButton: {
    flex: 1,
    backgroundColor: '#f59e0b',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  quickStartButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  disclaimerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef4444',
    textAlign: 'center',
    marginBottom: 12,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#fca5a5',
    textAlign: 'center',
    lineHeight: 20,
  },
}); 