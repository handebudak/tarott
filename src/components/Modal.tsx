import React from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ModalConfig } from '../types';

interface ModalProps {
  config: ModalConfig;
  onClose: () => void;
}

const { width, height } = Dimensions.get('window');

export const Modal: React.FC<ModalProps> = ({ config, onClose }) => {
  if (!config.isOpen) return null;

  const getModalStyle = () => {
    switch (config.type) {
      case 'error':
        return styles.errorModal;
      case 'warning':
        return styles.warningModal;
      case 'info':
        return styles.infoModal;
      default:
        return styles.warningModal;
    }
  };

  const getIconText = () => {
    switch (config.type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '⚠️';
    }
  };

  return (
    <RNModal
      visible={config.isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, getModalStyle()]}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{getIconText()}</Text>
          </View>
          
          <Text style={styles.title}>{config.title}</Text>
          
          <Text style={styles.message}>{config.message}</Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Tamam</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 24,
    width: width * 0.85,
    maxWidth: 400,
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  warningModal: {
    borderColor: '#f59e0b',
    backgroundColor: '#1a1a1a',
  },
  errorModal: {
    borderColor: '#ef4444',
    backgroundColor: '#1a1a1a',
  },
  infoModal: {
    borderColor: '#3b82f6',
    backgroundColor: '#1a1a1a',
  },
  iconContainer: {
    marginBottom: 16,
  },
  iconText: {
    fontSize: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 