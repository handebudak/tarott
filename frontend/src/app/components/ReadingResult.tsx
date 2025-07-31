interface ReadingResultProps {
  reading: string | null;
  onReset: () => void;
}

export default function ReadingResult({ reading, onReset }: ReadingResultProps) {
  if (!reading) return null;

  return (
    <div className="mt-6 sm:mt-8 bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6" data-reading-section>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">🔮 Tarot Falınız</h3>
      <div className="text-gray-200 leading-relaxed space-y-3 sm:space-y-4">
        {reading.split('\n').map((paragraph, index) => {
          // Başlık kontrolü
          if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
            return (
              <h4 key={index} className="text-amber-400 font-semibold text-base sm:text-lg mt-4 sm:mt-6 mb-2 sm:mb-3">
                {paragraph.replace(/\*\*/g, '')}
              </h4>
            );
          }
          // Boş satırları atla
          if (paragraph.trim() === '') {
            return null;
          }
          // Normal paragraf
          return (
            <p key={index} className="text-gray-200 leading-relaxed text-sm sm:text-base">
              {paragraph}
            </p>
          );
        })}
      </div>
      
      {/* Read Fortune Again Button */}
      <div className="mt-6 sm:mt-8 text-center">
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          🔮 Tekrar Falıma Bak
        </button>
      </div>
    </div>
  );
} 