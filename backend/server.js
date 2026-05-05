const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs'); // Import File System to debug
const app = express();

app.use(cors());
app.use(express.json());

// --- DEBUG SECTION ---
const assetsPath = path.resolve(__dirname, 'assets');
console.log("Absolute path to assets:", assetsPath);

if (fs.existsSync(assetsPath)) {
    console.log("✅ Folder found! Files inside:", fs.readdirSync(assetsPath));
} else {
    console.log("❌ Folder NOT found at this path.");
}
// ---------------------

// Use the absolute path variable here
app.use('/assets', express.static(assetsPath));

app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: "69fa381f0d052400d605dd03",
      name: "Gaming Headset Z-200",
      price: 59.99,
      image: "/assets/headset.png",
      description: "High-fidelity sound with noise cancellation.",
      category: "Electronics"
    }
  ]);
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));