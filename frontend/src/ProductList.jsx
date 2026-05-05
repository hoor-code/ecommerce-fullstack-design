import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // This is the "Button" that changes the URL

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
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
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            
            {/* THIS IS THE ROUTE BUTTON */}
            {/* It sends the user to /product/6637... based on the ID from the database */}
            <Link 
              to={`/product/${product._id}`} 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                background: '#007bff', 
                color: 'white', 
                padding: '10px', 
                textDecoration: 'none',
                marginTop: '10px'
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