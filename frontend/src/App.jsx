import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductPage from './ProductList.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}

export default App;