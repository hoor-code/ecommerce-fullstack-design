import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import FlagGER from "./assets/gbr.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      navigate("/cart");
    }
  };

  if (loading)
    return <div className="p-10 text-center">Loading product...</div>;
  if (!product)
    return (
      <div className="p-10 text-center text-red-500">Product not found!</div>
    );

  const mainImage = `${import.meta.env.VITE_API_URL}${product.image}`;

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <div className="px-4 md:px-10 py-4 text-sm text-gray-500">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        {">"} {product.category} {">"} {product.name}
      </div>

      <main className="mx-4 md:mx-10 bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="border border-gray-200 rounded-md p-5 flex justify-center mb-4">
              <img
                src={mainImage}
                alt={product.name}
                className="h-80 object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 border border-gray-300 rounded p-1 cursor-pointer hover:border-blue-500"
                >
                  <img
                    src={mainImage}
                    className="w-full h-full object-contain"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex-1">
            <p
              className={`${product.stock > 0 ? "text-green-500" : "text-red-500"} text-sm font-medium`}
            >
              {product.stock > 0 ? "✓ In stock" : "Out of Stock"}
            </p>
            <h1 className="text-2xl font-bold text-gray-800 mt-1">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-orange-400">★★★★☆ 9.3</span>
              <span className="text-gray-400">32 reviews</span>
              <span className="text-gray-400">{product.stock} available</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>

            <div className="grid grid-cols-3 bg-red-50 p-4 mt-4 rounded">
              <div>
                <p className="text-red-500 font-bold">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">Single Unit</p>
              </div>
              <div className="border-l border-red-200 pl-4">
                <p className="font-bold">${(product.price * 0.9).toFixed(2)}</p>
                <p className="text-xs text-gray-500">10-50 pcs</p>
              </div>
              <div className="border-l border-red-200 pl-4">
                <p className="font-bold">${(product.price * 0.8).toFixed(2)}</p>
                <p className="text-xs text-gray-500">50+ pcs</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm border-b pb-5">
              <div className="flex">
                <span className="w-24 text-gray-400">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400">Description:</span>
                <span>{product.description}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-64 border border-gray-200 rounded-md p-4 shadow-sm h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded text-blue-400 flex items-center justify-center font-bold text-xl">
                {product.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">Supplier</p>
                <p className="text-xs text-gray-500">Global Trade Corp</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-gray-500 mb-4 border-t pt-3">
              <div className="flex gap-2">
                <img src={FlagGER} className="w-4 h-3" alt="flag" /> Germany,
                Berlin
              </div>
              <p>✓ Verified Seller</p>
              <p>🌐 Worldwide shipping</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2 text-sm font-semibold">
              Send Inquiry
            </button>
            <button className="w-full border border-gray-200 text-blue-600 py-2 rounded-md text-sm font-semibold">
              Seller's profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
