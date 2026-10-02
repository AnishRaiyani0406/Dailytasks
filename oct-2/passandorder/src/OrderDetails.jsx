import React from 'react';

const OrderDetails = ({ order }) => {
  
  const currentOrder = order || {
    id: "GROC-987654",
    date: "2 October 2026",
    customer: {
      name: "Ananya Sharma",
      email: "ananya.s@example.com",
      address: "A-204, Royal Palms, SG Highway, Ahmedabad, Gujarat 380015",
    },
    items: [
      { id: 1, name: "Fresh Organic Tomatoes", quantity: "2 kg", pricePerUnit: 40.00, price: 80.00 },
      { id: 2, name: "Red Onions", quantity: "3 kg", pricePerUnit: 35.00, price: 105.00 },
      { id: 3, name: "Farm Fresh Potatoes", quantity: "5 kg", pricePerUnit: 30.00, price: 150.00 },
      { id: 4, name: "Amul Taaza Toned Milk", quantity: "2 L", pricePerUnit: 54.00, price: 108.00 },
      { id: 5, name: "Aashirvaad Shuddh Chakki Atta", quantity: "10 kg", pricePerUnit: 420.00, price: 420.00 },
      { id: 6, name: "Fresh Spinach (Palak)", quantity: "200 g", pricePerUnit: 25.00, price: 25.00 },
    ],
    deliveryFee: 40.00,
    discount: 50.00,
    total: 878.00,
  };

 
  const formatRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 font-sans text-gray-800">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl"></span>
            <h2 className="text-2xl font-bold text-gray-900">Order #{currentOrder.id}</h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">Placed on {currentOrder.date}</p>
        </div>
        <div>
     
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Invoice
          </button>
        </div>
      </div>

   
      <div className="py-6 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Delivery Address
        </h3>
        <p className="font-medium text-gray-800">{currentOrder.customer.name}</p>
        <p className="text-sm text-gray-600">{currentOrder.customer.address}</p>
        <p className="text-sm text-gray-600">{currentOrder.customer.email}</p>
      </div>

      
      <div className="py-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Grocery & Vegetable Items
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-emerald-50 text-emerald-900 font-medium border-b border-emerald-100">
              <tr>
                <th className="py-3 px-4">Item Name</th>
                <th className="py-3 px-4 text-center">Qty / Weight</th>
                <th className="py-3 px-4 text-right">Total Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentOrder.items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-3.5 px-4 font-medium text-gray-800">{item.name}</td>
                  <td className="py-3.5 px-4 text-center">{item.quantity}</td>
                  <td className="py-3.5 px-4 text-right font-medium text-gray-800">
                    {formatRupees(item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="flex justify-end pt-2">
        <div className="w-full sm:w-64 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Delivery Charge:</span>
            <span>{formatRupees(currentOrder.deliveryFee)}</span>
          </div>
          {currentOrder.discount > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span>Promo Discount:</span>
              <span>-{formatRupees(currentOrder.discount)}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 border-t border-gray-200 text-base font-bold text-gray-900">
            <span>Total Amount Paid:</span>
            <span className="text-emerald-700">{formatRupees(currentOrder.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;