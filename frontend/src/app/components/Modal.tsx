"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'warning' | 'error' | 'info';
}

export default function Modal({ isOpen, onClose, title, message, type = 'warning' }: ModalProps) {
  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Scroll'u engelle
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Modal dışına tıklayarak kapatma
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
        return 'ℹ️';
      default:
        return '⚠️';
    }
  };

  const getTitleColor = () => {
    switch (type) {
      case 'warning':
        return 'text-amber-400';
      case 'error':
        return 'text-red-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-amber-400';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-black/90 backdrop-blur-md border border-amber-500/30 rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-amber-500/20">
            <h3 className={`text-lg font-semibold ${
              type === 'error' ? 'text-red-400' : 
              type === 'warning' ? 'text-amber-400' : 
              'text-blue-400'
            }`}>
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <p className="text-gray-200 leading-relaxed">
              {message}
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex justify-end p-4 border-t border-amber-500/20">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                type === 'error' ? 'bg-red-600 hover:bg-red-700 text-white' : 
                type === 'warning' ? 'bg-amber-600 hover:bg-amber-700 text-white' : 
                'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Tamam
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 