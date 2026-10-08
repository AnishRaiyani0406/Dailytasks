import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const cart = [
    { id: 1, name: 'Spinach (Palak)', qty: '1 kg', price: 40 },
    { id: 2, name: 'Broccoli', qty: '500g', price: 60 },
    { id: 3, name: 'Green Capsicum', qty: '1 kg', price: 50 },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Order placed! Delivery expected in 30 mins.');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Cart List */}
        <div className="md:col-span-2 bg-white p-5 rounded-2xl shadow-sm border border-emerald-100">
          <h3 className="font-semibold text-gray-700 border-b border-gray-100 pb-3 mb-3">Order Items</h3>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.qty}</p>
                </div>
                <p className="font-bold text-gray-700">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bill Summary */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 h-fit">
          <h3 className="font-semibold text-gray-700 border-b border-gray-100 pb-3 mb-3">Summary</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-emerald-600 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-gray-800 border-t border-gray-100 pt-3 text-base">
              <span>Total</span>
              <span className="text-emerald-600">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={loading}
            className="w-full mt-4 bg-emerald-600 text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-emerald-700 transition disabled:bg-gray-300"
          >
            {loading ? 'Processing...' : `Pay ₹${total}`}
          </button>
        </div>
      </div>
    </div>
  );
}