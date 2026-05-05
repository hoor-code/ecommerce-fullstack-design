import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductList from './ProductList.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartPage from './CartPage.jsx';
import Login from './Login.jsx';
import Signup from './SignupPage.jsx';
import AdminPanel from './AdminDashboard.jsx'; // 1. Import your Admin component
import { CartProvider } from './CartContext.jsx';

// 2. A simple wrapper to protect the Admin route
const ProtectedAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  // If no user is logged in OR the user is not an admin, send them home
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <CartProvider> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* 3. Add the Admin Route here */}
        <Route 
          path="/admin" 
          element={
            <ProtectedAdminRoute>
              <AdminPanel />
            </ProtectedAdminRoute>
          } 
        />
      </Routes>
    </CartProvider>
  );
}

export default App;