import { useCart } from './CartContext.jsx';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Dynamic Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = subtotal > 500 ? 60 : 0; // Example logic
  const tax = subtotal * 0.02; // 2% Tax
  const total = subtotal - discount + tax;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My cart ({cartItems.length})</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="p-5 space-y-5">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link to="/" className="text-blue-600 font-bold">Go Shopping</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item._id} className="flex flex-col md:flex-row gap-4 pb-5 border-b border-gray-100">
                  <div className="w-20 h-20 border border-gray-200 rounded flex-shrink-0 p-2">
                    {/* Using the server URL for the image */}
                    <img src={`http://localhost:5000${item.image}`} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Category: {item.category}</p>
                    
                    <div className="flex gap-2 mt-3">
                      <button 
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 border border-gray-200 px-3 py-1 rounded text-xs hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-sm font-medium">
                    Qty: {item.qty}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-5 bg-white border-t border-gray-100 flex justify-between items-center">
            <Link to="/products" className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold">
              ← Back to Shopping
            </Link>
            <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold">
              ← Back to Home
            </Link>
            <button onClick={clearCart} className="text-blue-600 border border-gray-200 px-5 py-2 rounded-md text-sm font-semibold">
              Remove all
            </button>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="w-full lg:w-80 space-y-4">
          <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
            <div className="space-y-2 text-gray-600 text-sm border-b pb-4">
              <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-red-500"><span>Discount:</span><span>-${discount.toFixed(2)}</span></div>
              <div className="flex justify-between text-green-500"><span>Tax:</span><span>+${tax.toFixed(2)}</span></div>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;