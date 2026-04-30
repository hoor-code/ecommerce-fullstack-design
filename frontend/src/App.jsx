import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductPage from './ProductList.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartPage from './CartPage.jsx';
import Login from './Login.jsx';
import Signup from './SignupPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;