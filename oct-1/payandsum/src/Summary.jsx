import React, { useState } from 'react';
import { ShoppingBag, MapPin, Clock, Tag, Plus, Minus, ArrowRight } from 'lucide-react';

export default function Summary({ onProceed }) {
  
  const [items, setItems] = useState([
    { id: 1, name: 'Aashirvaad Atta', weight: '5 kg', price: 275, qty: 1 },
    { id: 2, name: 'Amul Milk', weight: '1 L', price: 54, qty: 2 },
    { id: 3, name: 'Bananas', weight: '1 kg', price: 48, qty: 1 },
  ]);

  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(30);


  const updateQty = (id, delta) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal > 300 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-5">
     
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
          <h1 className="text-base font-bold text-slate-900">Order Summary</h1>
        </div>
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
          {items.reduce((acc, item) => acc + item.qty, 0)} Items
        </span>
      </div>

      
      <div className="bg-slate-50 p-3 rounded-xl space-y-1.5 text-xs text-slate-600">
        <div className="flex items-center gap-2 text-slate-800 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">Home - Flat 402, Green Acres, SG Highway</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Delivery in 15–20 mins</span>
        </div>
      </div>

     
      <div className="divide-y divide-slate-100 text-xs">
        {items.map(item => (
          <div key={item.id} className="py-2.5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800">{item.name}</p>
              <p className="text-slate-400 text-[11px]">{item.weight}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-800">₹{item.price * item.qty}</span>
              <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                <button onClick={() => updateQty(item.id, -1)} className="p-1 text-slate-500 hover:text-slate-800">
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-2 font-bold text-slate-700">{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)} className="p-1 text-slate-500 hover:text-slate-800">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex items-center justify-between bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl text-xs">
        <div className="flex items-center gap-2 text-emerald-800">
          <Tag className="w-4 h-4 text-emerald-600" />
          <span>Coupon Applied <strong>(-₹{discount})</strong></span>
        </div>
        <button onClick={() => setDiscount(0)} className="text-rose-600 font-semibold hover:underline">
          Remove
        </button>
      </div>

    
      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
        <div className="flex justify-between">
          <span>Items Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Delivery Charge</span>
          <span>{deliveryFee === 0 ? <span className="text-emerald-600 font-medium">FREE</span> : `₹${deliveryFee}`}</span>
        </div>
        <div className="flex justify-between font-bold text-sm text-slate-900 border-t border-slate-100 pt-2">
          <span>To Pay</span>
          <span className="text-emerald-700">₹{total}</span>
        </div>
      </div>

    
      <button
        onClick={() => onProceed ? onProceed(total) : alert(`Proceeding to pay ₹${total}`)}
        className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-sm font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        Pay ₹{total} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}