const express = require('express');
const router = express.Router();
const tarotService = require('../services/tarotService');

// Single card reading endpoint
router.post('/single-card', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length === 0) {
      return res.status(400).json({ error: 'Kart seçilmedi' });
    }
    
    const result = await tarotService.createSingleCardReading(selectedCards, cardOrientations, question, name);
    res.json(result);
    
  } catch (error) {
    console.error('Single card reading error:', error);
    res.status(500).json({ error: 'Single card reading error' });
  }
});

// Three card reading endpoint
router.post('/three-cards', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length !== 3) {
      return res.status(400).json({ error: 'Three cards not selected' });
    }
    
    const result = await tarotService.createThreeCardReading(selectedCards, cardOrientations, question, name);
    res.json(result);
    
  } catch (error) {
    console.error('Three card reading error:', error);
    res.status(500).json({ error: 'Three card reading error' });
  }
});

// General reading endpoint
router.post('/reading', async (req, res) => {
  try {
    const { name, question, selectedCards, cardOrientations } = req.body;
    
    if (!selectedCards || selectedCards.length === 0) {
      return res.status(400).json({ error: 'Kart seçilmedi' });
    }
    
    if (selectedCards.length === 1) {
      // Single card reading
      const result = await tarotService.createSingleCardReading(selectedCards, cardOrientations, question, name);
      res.json(result);
    } else if (selectedCards.length === 3) {
      // Three card reading
      const result = await tarotService.createThreeCardReading(selectedCards, cardOrientations, question, name);
      res.json(result);
    } else {
      res.status(400).json({ error: 'Geçersiz kart sayısı' });
    }
    
  } catch (error) {
    console.error('Reading error:', error);
    res.status(500).json({ error: 'Reading error' });
  }
});

module.exports = router; 