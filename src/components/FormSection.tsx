import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { FormSectionProps, ReadingType } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({
  name,
  setName,
  question,
  setQuestion,
  onSubmit,
  isLoading,
  selectedCards,
  type,
  onRandomSelect,
}) => {
  const requiredCards = type === 'single' ? 1 : 3;
  const isFormValid = question.trim().length > 0 && selectedCards.length === requiredCards;

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>Fal Bilgileri</Text>
      
      <View style={styles.formContainer}>
        {/* İsim Alanı */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>İsminiz (Opsiyonel)</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="İsminizi girin..."
            placeholderTextColor="#9ca3af"
            maxLength={50}
          />
        </View>

        {/* Soru Alanı */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sorunuz *</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            value={question}
            onChangeText={setQuestion}
            placeholder="Tarot falınızı baktırabilmek için sorunuzu yazın..."
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
            maxLength={500}
            textAlignVertical="top"
          />
          <Text style={styles.characterCount}>
            {question.length}/500
          </Text>
        </View>

        {/* Kart Seçim Durumu */}
        <View style={styles.selectionStatus}>
          <Text style={styles.statusTitle}>Kart Seçim Durumu</Text>
          <Text style={styles.statusText}>
            {type === 'single' 
              ? `Seçilen kart: ${selectedCards.length}/1`
              : `Seçilen kartlar: ${selectedCards.length}/3`
            }
          </Text>
          
          {selectedCards.length < requiredCards && (
            <Text style={styles.warningText}>
              {type === 'single'
                ? 'Lütfen bir kart seçin'
                : 'Lütfen üç kart seçin'
              }
            </Text>
          )}
        </View>

        {/* Butonlar */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.randomButton]}
            onPress={onRandomSelect}
            activeOpacity={0.7}
            disabled={isLoading}
          >
            <Text style={styles.randomButtonText}>
              Rastgele Seç
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button, 
              styles.submitButton,
              !isFormValid && styles.disabledButton
            ]}
            onPress={onSubmit}
            activeOpacity={0.7}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.submitButtonText}>
                Fal Baktır
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Bilgi Metni */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>💡 Önemli Bilgiler</Text>
          <Text style={styles.infoText}>
            • Sorunuzu net ve açık bir şekilde yazın
          </Text>
          <Text style={styles.infoText}>
            • Sezgilerinize güvenerek kartları seçin
          </Text>
          <Text style={styles.infoText}>
            • Fal sonucu AI tarafından özel olarak hazırlanır
          </Text>
          <Text style={styles.infoText}>
            • Sonuçlar sadece rehberlik amaçlıdır
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  characterCount: {
    color: '#9ca3af',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 4,
  },
  selectionStatus: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  statusTitle: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statusText: {
    color: '#e5e7eb',
    fontSize: 14,
    marginBottom: 4,
  },
  warningText: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  randomButton: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.5)',
  },
  randomButtonText: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#f59e0b',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#6b7280',
    opacity: 0.5,
  },
  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 12,
    padding: 16,
  },
  infoTitle: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    color: '#d1d5db',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
}); 