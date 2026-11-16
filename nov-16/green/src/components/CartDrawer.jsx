import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onPlaceOrder,
}) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = subtotal >= 2500 || subtotal === 0 ? 0 : 350;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-[1px]"
      />

     
      <div className="relative w-full max-w-md bg-white h-full flex flex-col border-l border-stone-200 z-10">
       
        <div className="px-5 h-16 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-stone-900">
            <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Your Basket ({cart.reduce((s, i) => s + i.qty, 0)})</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:bg-stone-100 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500 text-sm">Your basket is empty.</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-50"
              >
                Browse Fresh Produce
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight || item.unit}`}
                className="flex items-center gap-3 pb-4 border-b border-stone-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover border border-stone-200 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-stone-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {item.selectedWeight || item.unit} · ₹{item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(item, item.qty - 1)}
                      className="w-7 h-7 rounded-md border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item, item.qty + 1)}
                      className="w-7 h-7 rounded-md border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" /></svg>
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold text-stone-900">
                  ₹{(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

       
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex justify-between text-sm text-stone-600">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-stone-600">
              <span>Delivery</span>
              <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-stone-900 pt-2 border-t border-stone-200">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => onPlaceOrder(total)}
              className="w-full py-3 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition"
            >
              Place Order · ₹{total.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}