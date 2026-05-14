import { Link } from "react-router-dom";
import React, { useState } from "react";

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    alert("Product Added!");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Admin: Add New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          className="p-2 border"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className="p-2 border"
          placeholder="Price"
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className="p-2 border"
          placeholder="Category"
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <textarea
          className="p-2 border"
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          className="p-2 border"
          placeholder="Image URL"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <input
          className="p-2 border"
          placeholder="Stock"
          type="number"
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Add Product
        </button>
        <Link to="/login">
          <button className="w-full bg-blue-600 rounded-md text-white py-2 text-sm font-semibold hover:bg-blue-700 mb-2">
            Logout
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AdminDashboard;
