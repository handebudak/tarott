const fs = require('fs');
const path = require('path');

// Load card data
const cardsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../cards.json'), 'utf8'));

// Track used sentences
const usedSentences = new Set();

function isSentenceRepeated(sentence) {
  const normalizedSentence = sentence.toLowerCase().trim();
  return usedSentences.has(normalizedSentence);
}

function markSentenceAsUsed(sentence) {
  const normalizedSentence = sentence.toLowerCase().trim();
  usedSentences.add(normalizedSentence);
}

// Post-processing function for text formatting improvements
function postprocessReading(text, displayName) {
  let processedText = text;
  
  // Improve sentence flow and punctuation
  processedText = processedText
    .replace(/\.\.\./g, '...')
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
  
  return processedText;
}

// Function to generate tarot reading with Groq API
async function generateTarotReading(card, question, name) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set');
    }

    // Name check - if empty, don't address
    const displayName = (name && name.trim()) ? name.trim() : "";
    const namePrefix = displayName ? `Adım ${displayName}. ` : "";

    const prompt = `${namePrefix}${question} Kartım: ${card.turkish_name} (${card.isReversed ? 'Ters' : 'Düz'}).`;

    console.log('Sending request to Groq API...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `
Sen bir tarot uzmanısın. Kullanıcının sorduğu soruya göre kartı yorumluyorsun.

ÖNEMLİ KURALLAR:
- SORUYA ODAKLAN: Sadece sorulan soruya göre yorum yap
- GENEL VARSAMI YAPMA: Belirli bir senaryo varsayma
- SEZGİSEL TON: Sakin ve empatik
- AKICI YAZ: Başlıksız, hikâye anlatımı gibi

Yazı dili: Türkçe, sade, sezgisel, içten.

${displayName ? `Kullanıcının adı ${displayName}. Bu ismi sadece bir kez nazikçe girişte kullan.` : 'Kullanıcının adı belirtilmemiş. Doğrudan kartın enerjisine ve soruya odaklan.'}

---

Kart: ${card.turkish_name} (${card.isReversed ? 'Ters' : 'Düz'})

Sadece kullanıcının sorduğu soruya göre kartı yorumla. Genel varsayımlar yapma, sadece soruya odaklan.
            `.trim()
          },

          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 1.0
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let reading = data.choices[0].message.content;

    // Post-processing: Turkish language improvements
    reading = postprocessReading(reading, displayName);

    markSentenceAsUsed(reading);

    return reading;

  } catch (error) {
    console.error('Groq API Error:', error);
    return "Sorry, tarot interpretation is not available right now. Please try again later.";
  }
}

// Function to generate tarot reading with position context
async function generateTarotReadingWithPosition(card, question, name, position) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set');
    }

    // Name check - if empty, don't address
    const displayName = (name && name.trim()) ? name.trim() : "";
    const namePrefix = displayName ? `Adım ${displayName}. ` : "";

    const prompt = `${namePrefix}${question} Kartım: ${card.turkish_name} (${card.isReversed ? 'Ters' : 'Düz'}). Pozisyon: ${position}.`;

    console.log('Sending request to Groq API with position context...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `
Sen bir tarot uzmanısın. Kullanıcının sorduğu soruya göre kartı yorumluyorsun.

ÖNEMLİ KURALLAR:
- SORUYA ODAKLAN: Sadece sorulan soruya göre yorum yap
- POZİSYONA DİKKAT ET: Kartın pozisyonunu (Geçmiş/Şimdiki Zaman/Gelecek) dikkate al
- GENEL VARSAMI YAPMA: Belirli bir senaryo varsayma
- SEZGİSEL TON: Sakin ve empatik
- AKICI YAZ: Başlıksız, hikâye anlatımı gibi

POZİSYON YORUMU:
- Geçmiş: Kartın geçmişteki etkisini ve dersleri yorumla
- Şimdiki Zaman: Kartın şu anki durumu ve mevcut enerjiyi yorumla  
- Gelecek: Kartın gelecekteki potansiyeli ve yönlendirmeyi yorumla

Yazı dili: Türkçe, sade, sezgisel, içten.

${displayName ? `Kullanıcının adı ${displayName}. Bu ismi sadece bir kez nazikçe girişte kullan.` : 'Kullanıcının adı belirtilmemiş. Doğrudan kartın enerjisine ve soruya odaklan.'}

---

Kart: ${card.turkish_name} (${card.isReversed ? 'Ters' : 'Düz'})
Pozisyon: ${position}

Kullanıcının sorduğu soruya göre kartı yorumla. Kartın pozisyonunu dikkate alarak yorum yap.
            `.trim()
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 1.0
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let reading = data.choices[0].message.content;

    // Post-processing: Turkish language improvements
    reading = postprocessReading(reading, displayName);

    markSentenceAsUsed(reading);

    return reading;

  } catch (error) {
    console.error('Groq API Error:', error);
    return "Sorry, tarot interpretation is not available right now. Please try again later.";
  }
}

// Function to generate three card summary reading with Groq API
async function generateThreeCardSummaryReading(cards, question, name) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set');
    }

    // Name check - if empty, don't address
    const displayName = (name && name.trim()) ? name.trim() : "";
    const namePrefix = displayName ? `Adım ${displayName}. ` : "";

    const cardDescriptions = cards.map((card, index) => 
      `${index + 1}. ${card.turkish_name} (${card.isReversed ? 'Ters' : 'Düz'})`
    ).join('\n');

    const prompt = `${namePrefix}Soru: ${question}

Kartlar:
${cardDescriptions}

Bu üç kart birlikte kullanıcıya ne söylüyor? Aralarındaki ilişki nedir? Soruyla nasıl bağlantılı? Sezgisel ve spiritüel bir yorum yap.`;

    console.log('Sending three card summary request to Groq API...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `
Sen bir tarot uzmanısın. Üç kartın bir araya gelişini analiz ediyorsun.

ÖNEMLİ KURALLAR:
- KISA VE ÖZ: Maksimum 4-5 cümle
- İSİM TEKRARI YAPMA: Kullanıcı ismini sadece bir kez kullan
- SORUYA ODAKLAN: Sorulan soruya göre üç kartı ilişkilendir
- TEKRAR ETME: Aynı fikri farklı kelimelerle tekrar yazma
- AKICI YAZ: Başlıksız, hikâye anlatımı gibi

Yazı dili: Türkçe, sade, sezgisel, içten.

${displayName ? `Kullanıcının adı ${displayName}. Bu ismi sadece bir kez nazikçe kullan.` : 'Kullanıcının adı belirtilmemiş. Doğrudan kartların enerjisine ve soruya odaklan.'}

---

Üç kartın birleşik enerjisini sorulan soruya göre kısa ve öz şekilde analiz et. Her kartın enerjisini birbirine bağla ama tekrar etme. Sadece ana mesajı ver.
            `.trim()
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 1.0
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let reading = data.choices[0].message.content;

    // Post-processing: Turkish language improvements
    reading = postprocessReading(reading, displayName);

    markSentenceAsUsed(reading);

    return reading;

  } catch (error) {
    console.error('Groq API Error:', error);
    return "Sorry, tarot interpretation is not available right now. Please try again later.";
  }
}

// Create a single card reading
async function createSingleCardReading(selectedCards, cardOrientations, question, name) {
  try {
    const cardIndex = selectedCards[0];
    const card = cardsData[cardIndex];
    const isReversed = cardOrientations && cardOrientations[0];
    
    if (!card) {
      throw new Error('Invalid card');
    }
    
    // Prepare card information
    const cardInfo = {
      name: card.name,
      turkish_name: card.turkish_name,
      meaning: isReversed ? card.meaning_reversed : card.meaning_upright,
      keywords: card.keywords,
      detailed_meaning: card.detailed_meaning,
      advice: card.advice,
      isReversed: isReversed
    };
    
    // Generate tarot reading with Groq API
    const reading = await generateTarotReading(cardInfo, question, name);
    
    return {
      reading,
      card: {
        name: card.name,
        turkish_name: card.turkish_name,
        meaning: isReversed ? card.meaning_reversed : card.meaning_upright,
        isReversed
      }
    };
    
  } catch (error) {
    console.error('Error creating single card reading:', error);
    throw error;
  }
}

// Create a three card reading
async function createThreeCardReading(selectedCards, cardOrientations, question, name) {
  try {
    // Name check - if empty, don't address
    const displayName = (name && name.trim()) ? name.trim() : "";
    const namePrefix = displayName ? `${displayName}, ` : "";
    
    const cards = selectedCards.map((index, i) => {
      const card = cardsData[index];
      const isReversed = cardOrientations && cardOrientations[i];
      return { 
        name: card.name,
        turkish_name: card.turkish_name,
        isReversed: isReversed
      };
    });
    
    let reading = "🌟 **Üç Kart Tarot Falı** 🌟\n\n";
    reading += `${namePrefix}Evrenin enerjileri seçtiğiniz üç kart aracılığıyla size özel mesajınızı iletiyor...\n\n`;
    
    const positions = ['Geçmiş', 'Şimdiki Zaman', 'Gelecek'];
    
    // Get interpretation for each card separately from Groq API
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const position = positions[i];
      reading += `**${position} - ${card.turkish_name}**\n\n`;
      
      // Call generateTarotReading for each card with position context
      const cardReading = await generateTarotReadingWithPosition(card, question, "", position);
      reading += `${cardReading}\n\n`;
    }
    
    // Call generateThreeCardSummaryReading for general analysis of three cards
    reading += "**Kozmik Sonuç**\n\n";
    const summaryReading = await generateThreeCardSummaryReading(cards, question, name);
    reading += `${summaryReading}\n\n`;
    
    reading += "Bu bilgelik ışığında, iç sesinizi dinleyin ve kalbinizi takip edin...";
    
    return {
      reading,
      cards: cards.map(card => ({
        name: card.name,
        turkish_name: card.turkish_name,
        isReversed: card.isReversed
      }))
    };
    
  } catch (error) {
    console.error('Error creating three card reading:', error);
    throw error;
  }
}

module.exports = {
  generateTarotReading,
  generateTarotReadingWithPosition,
  generateThreeCardSummaryReading,
  createSingleCardReading,
  createThreeCardReading,
  cardsData
}; 