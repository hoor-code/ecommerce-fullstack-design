import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductPage from './ProductList.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartPage from './CartPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;