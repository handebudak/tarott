const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS ayarları
app.use(cors());
app.use(express.json());

// Route'ları yükle
const cardsRoutes = require('./routes/cards');
const tarotRoutes = require('./routes/tarot');

// Route'ları kullan
app.use('/api', cardsRoutes);
app.use('/api/tarot', tarotRoutes);

// Main endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Tarot API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 