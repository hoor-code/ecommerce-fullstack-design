import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Keep your existing icon imports (BrandLogo, FlagGER, etc.)

const ProductDetails = () => {
  const { id } = useParams(); // Grabs the ID from the URL bar
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch only this specific product
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading product...</div>;
  if (!product) return <div className="p-20 text-center">Product not found.</div>;

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <div className="px-4 md:px-10 py-4 text-sm text-gray-500">
        Home {'>'} Products {'>'} {product.category || 'Details'}
      </div>

      <main className="mx-4 md:mx-10 bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: Image Section */}
          <div className="lg:w-1/3">
            <div className="border border-gray-200 rounded-md p-5 flex justify-center mb-4">
              <img 
                src={`http://localhost:5000${product.image}`} 
                alt={product.name} 
                className="h-80 object-contain" 
              />
            </div>
          </div>

          {/* MIDDLE: Info Section */}
          <div className="lg:flex-1">
            <p className="text-green-500 text-sm font-medium">✓ In stock</p>
            <h1 className="text-2xl font-bold text-gray-800 mt-1">
              {product.name}
            </h1>
            
            <div className="grid grid-cols-1 bg-red-50 p-4 mt-4 rounded">
              <div>
                <p className="text-red-500 font-bold text-2xl">${product.price}</p>
                <p className="text-xs text-gray-500">Free shipping included</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm border-b pb-5">
              <div className="flex">
                <span className="w-24 text-gray-400">Description:</span>
                <span className="flex-1">{product.description}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400">Category:</span>
                <span>{product.category || 'General'}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Supplier Sidebar (Static) */}
          <div className="lg:w-64 border border-gray-200 rounded-md p-4 shadow-sm h-fit">
             <p className="text-sm font-medium mb-2">Supplier Info</p>
             <p className="text-xs text-gray-500">Guanjoi Trading LLC</p>
             <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 text-sm">Send Inquiry</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;