const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Kart verilerini yükle
const cardsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../cards.json'), 'utf8'));

// Tüm kartları getir
router.get('/cards', (req, res) => {
  try {
    res.json(cardsData);
  } catch (error) {
    console.error('Kartlar getirilirken hata:', error);
    res.status(500).json({ error: 'Kartlar yüklenirken bir hata oluştu' });
  }
});

// Sağlık kontrolü
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Kart API çalışıyor' });
});

module.exports = router; 