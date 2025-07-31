const express = require('express');
const router = express.Router();
const tarotService = require('../services/tarotService');

// Tek kart falı endpoint'i
router.post('/single-card', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length === 0) {
      return res.status(400).json({ error: 'Kart seçilmedi' });
    }
    
    const result = await tarotService.createSingleCardReading(selectedCards, cardOrientations, question, name);
    res.json(result);
    
  } catch (error) {
    console.error('Tek kart falı hatası:', error);
    res.status(500).json({ error: 'Fal oluşturulurken bir hata oluştu' });
  }
});

// Üç kart falı endpoint'i
router.post('/three-cards', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length !== 3) {
      return res.status(400).json({ error: 'Üç kart seçilmedi' });
    }
    
    const result = await tarotService.createThreeCardReading(selectedCards, cardOrientations, question, name);
    res.json(result);
    
  } catch (error) {
    console.error('Üç kart falı hatası:', error);
    res.status(500).json({ error: 'Fal oluşturulurken bir hata oluştu' });
  }
});

// Genel fal endpoint'i
router.post('/reading', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length === 0) {
      return res.status(400).json({ error: 'Kart seçilmedi' });
    }
    
    if (selectedCards.length === 1) {
      // Tek kart falı
      const result = await tarotService.createSingleCardReading(selectedCards, cardOrientations, question, name);
      res.json(result);
    } else if (selectedCards.length === 3) {
      // Üç kart falı
      const result = await tarotService.createThreeCardReading(selectedCards, cardOrientations, question, name);
      res.json(result);
    } else {
      res.status(400).json({ error: 'Geçersiz kart sayısı' });
    }
    
  } catch (error) {
    console.error('Fal hatası:', error);
    res.status(500).json({ error: 'Fal oluşturulurken bir hata oluştu' });
  }
});

module.exports = router; 