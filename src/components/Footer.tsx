import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

export const Footer: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:bdkhande@gmail.com');
  };

  return (
    <View style={styles.footer}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tarott</Text>
          <Text style={styles.sectionText}>
            Yapay zeka destekli tarot falı uygulaması
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hızlı Linkler</Text>
          <TouchableOpacity
            style={styles.link}
            onPress={() => handleNavigation('About')}
          >
            <Text style={styles.linkText}>Hakkımızda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => handleNavigation('Privacy')}
          >
            <Text style={styles.linkText}>Gizlilik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => handleNavigation('Terms')}
          >
            <Text style={styles.linkText}>Kullanım Koşulları</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>İletişim</Text>
          <TouchableOpacity
            style={styles.link}
            onPress={handleEmail}
          >
            <Text style={styles.linkText}>bdkhande@gmail.com</Text>
          </TouchableOpacity>
          <Text style={styles.sectionText}>
            Hande Budak
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.copyright}>
          © 2024 Tarott. Tüm hakları saklıdır.
        </Text>
        <Text style={styles.disclaimer}>
          Bu uygulama eğlence amaçlıdır.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(245, 158, 11, 0.3)',
    paddingTop: 20,
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  sectionTitle: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionText: {
    color: '#e5e7eb',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  link: {
    marginBottom: 4,
  },
  linkText: {
    color: '#d1d5db',
    fontSize: 12,
    textAlign: 'center',
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  copyright: {
    color: '#9ca3af',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  disclaimer: {
    color: '#6b7280',
    fontSize: 10,
    textAlign: 'center',
  },
}); 