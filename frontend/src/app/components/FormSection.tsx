interface FormSectionProps {
  name: string;
  setName: (name: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  enableReversed: boolean;
  setEnableReversed: (enabled: boolean) => void;
  title: string;
  description: string;
  instructions: string[];
  showReversedOption?: boolean;
  additionalInfo?: React.ReactNode;
}

export default function FormSection({
  name,
  setName,
  question,
  setQuestion,
  enableReversed,
  setEnableReversed,
  title,
  description,
  instructions,
  showReversedOption = true,
  additionalInfo
}: FormSectionProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left side - Information */}
        <div className="space-y-4">
          <div>
            <h3 className="text-amber-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-amber-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">🧘‍♀️ Kart Seçmeden Önce...</h3>
            <div className="text-gray-200 text-xs sm:text-sm leading-relaxed space-y-2">
              {instructions.map((instruction, index) => (
                <p key={index}>{instruction}</p>
              ))}
              {additionalInfo && (
                <div className="mt-4">
                  {additionalInfo}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Input fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2 text-sm sm:text-base">Adınız</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 text-sm sm:text-base"
              placeholder="Adınızı girin"
              maxLength={48}
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2 text-sm sm:text-base">Sorunuz</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none text-sm sm:text-base"
              placeholder="Tarot kartlarına soracağınız soruyu yazın..."
              rows={4}
              maxLength={142}
            />
          </div>

          {/* Reversed Card Option */}
          {showReversedOption && (
            <>
              <div className="flex items-center justify-center pt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableReversed}
                    onChange={(e) => setEnableReversed(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    enableReversed ? 'bg-amber-500' : 'bg-gray-600'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enableReversed ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                  <span className="ml-3 text-white font-medium text-sm sm:text-base">
                    🔄 Ters Kart Seçeneği
                  </span>
                </label>
              </div>
              <div className="text-center mt-2">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Ters kartlar, tarotun geleneksel yorumlarında farklı anlamlar taşır.<br />
                  Dilersen bu seçeneği kullanabilirsin.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 