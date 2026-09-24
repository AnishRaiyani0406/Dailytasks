import React, { useState } from 'react';
import { ShoppingBag, Truck, User } from 'lucide-react';

import OrderHistory from './pages/OrderHistory';
import DeliveryStatus from './pages/DeliveryStatus';
import ProfileUpdate from './pages/ProfileUpdate';

export default function App() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Header Navigation */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
              V
            </div>
            <span className="font-bold text-lg text-white tracking-wide">
              Vendor Portal
            </span>
          </div>

          <nav className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'orders'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShoppingBag size={16} />
              Order History
            </button>

            <button
              onClick={() => setActiveTab('delivery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'delivery'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Truck size={16} />
              Delivery Status
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'profile'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <User size={16} />
              Profile
            </button>
          </nav>
          
        </div>
      </header>

      {/* Main View Switcher */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        {activeTab === 'orders' && <OrderHistory />}
        {activeTab === 'delivery' && <DeliveryStatus />}
        {activeTab === 'profile' && <ProfileUpdate />}
      </main>

    </div>
  );
}