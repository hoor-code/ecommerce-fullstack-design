import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductList from './ProductList.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartPage from './CartPage.jsx';
import Login from './Login.jsx';
import Signup from './SignupPage.jsx';
import { CartProvider } from './CartContext.jsx'; // Correct import

function App() {
  return (
    /* 1. The Provider must wrap the Routes to share data across all pages */
    <CartProvider> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </CartProvider>
  );
}

export default App;