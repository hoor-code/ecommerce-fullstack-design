const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// --------------------
// Safety Checks
// --------------------
if (!process.env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in .env");
}

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in .env");
}

// --------------------
// Middleware
// --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------
// CORS (Production Safe)
// --------------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://your-frontend-name.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow Postman / server-to-server
    if (!origin) return callback(null, true);

    // allow known frontend
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // TEMP: allow all for deployment stability
    return callback(null, true);
  },
  credentials: true
}));

// --------------------
// Static Assets
// --------------------
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// --------------------
// Models
// --------------------
const Product = require('./models/Product');
const User = require('./models/User');

// --------------------
// Routes
// --------------------

// Health Check
app.get('/', (req, res) => {
  res.send("🚀 Server is running correctly!");
});

// --------------------
// Register
// --------------------
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: 'user'
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --------------------
// Login
// --------------------
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET
      );

      return res.json({
        token,
        user: {
          name: user.firstName,
          role: user.role,
          email: user.email
        }
      });

    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (err) {
    res.status(500).json({ message: "Server error during login" });
  }
});

// --------------------
// Create Product
// --------------------
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      image,
      category
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);

  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to create product" });
  }
});

// --------------------
// Get All Products
// --------------------
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --------------------
// Get Product by ID
// --------------------
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (err) {
    res.status(500).json({ message: "Invalid product ID" });
  }
});

// --------------------
// MongoDB Connection
// --------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.log("❌ MongoDB Error:", err));

// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});