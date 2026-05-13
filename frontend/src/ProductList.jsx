import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '15px' }}>
            {/* Added full backend URL to image src */}
          <img 
  src={`${import.meta.env.VITE_API_URL}${product.image}`} 
  alt={product.name} 
  style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            
            <Link 
              to={`/product-details/${product._id}`} 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                background: '#007bff', 
                color: 'white', 
                padding: '10px', 
                textDecoration: 'none',
                marginTop: '10px',
                borderRadius: '4px'
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;