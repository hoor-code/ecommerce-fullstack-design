const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Added this
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- THE MISSING PIECE FOR IMAGES ---
// This tells index.js how to serve your photos
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const Product = require('./models/Product');

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
// Update this section in your index.js
mongoose.connect(mongoURI, {
  tlsAllowInvalidCertificates: true, // This bypasses the SSL/TLS certificate error
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
  res.send("Server is running and assets are linked!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});