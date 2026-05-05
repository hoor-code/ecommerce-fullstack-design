import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Keep your existing asset imports here...

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from your Node.js backend
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Breadcrumbs - Keep same */}
      <div className="px-10 py-4 flex items-center gap-2 text-sm text-gray-500">
        <span>Home</span> <span>&gt;</span> <span>Electronics</span> <span>&gt;</span> <span className="font-medium text-gray-800">All Products</span>
      </div>

      <div className="px-10 flex gap-6 pb-10">
        {/* Sidebar - Keep your existing aside code here */}
        
        <main className="flex-1">
          {/* Header section - Keep same */}
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-4 flex justify-between items-center text-sm">
            <p>{products.length} items found</p>
            {/* ... rest of your header items */}
          </div>

          <div className="flex flex-col gap-3">
            {products.map(product => (
              <div key={product._id} className="bg-white border border-gray-200 rounded-md p-4 flex gap-6 hover:shadow-md transition-shadow">
                <div className="w-48 h-48 flex-shrink-0">
                  {/* Note: Check if your DB image is a URL or a local path */}
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">{product.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {/* Using price * 1.2 as a fake old price if not in DB */}
                    <span className="text-gray-400 line-through text-sm">${(product.price * 1.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-orange-400">★★★★☆</span>
                    <span className="text-orange-400 font-medium">4.5</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{product.stock} in stock</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-green-500 font-medium">Free Shipping</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-2xl">
                    {product.description || "No description available for this item."}
                  </p>
                  
                  <button className="mt-4 text-blue-600 font-bold text-sm hover:underline">View details</button>
                </div>
                
                <button className="h-10 w-10 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
                  <span className="text-blue-600 text-xl">♡</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination - Keep same */}
        </main>
      </div>
    </div>
  );
};

export default ProductList;

