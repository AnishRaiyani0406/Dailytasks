import React, { useState } from 'react';
import VendorSidebar from './components/VendorSidebar';
import ProductList from './components/ProductList'; // Imported ProductList component
import { Search, Bell, Plus, Package, ShoppingBag, Wallet } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-slate-950 font-sans text-slate-100 antialiased overflow-hidden">
      {/* Sidebar Component */}
      <VendorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-slate-900/50 border-b border-slate-800/80 px-6 flex items-center justify-between shrink-0">
          {/* Search Bar */}
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search products, orders..."
              className="w-full bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm pl-10 pr-4 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-slate-900" />
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-indigo-600/20 transition-colors">
              <Plus size={16} />
              Add Product
            </button>
          </div>
        </header>

        {/* Dashboard Body / Page Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Header Title */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{activeTab}</h1>
            <p className="text-sm text-slate-400 mt-1">
              {activeTab === 'Products' 
                ? 'Manage and monitor all items listed in your inventory.' 
                : 'Welcome back, Sarah! Here is an overview of your store.'}
            </p>
          </div>

          {/* Tab View Switching */}
          {activeTab === 'Products' ? (
            /* Render Product List when 'Products' tab is active */
            <ProductList />
          ) : (
            /* Default View (Dashboard / Other Tabs) */
            <>
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Sales</p>
                    <p className="text-2xl font-bold text-white mt-1">₹12,450.00</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pending Orders</p>
                    <p className="text-2xl font-bold text-white mt-1">18</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                    <Package size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Listings</p>
                    <p className="text-2xl font-bold text-white mt-1">128</p>
                  </div>
                </div>
              </div>

              {/* Table / Details Placeholder */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 min-h-300px">
                <h2 className="text-lg font-semibold text-white mb-4">Recent Orders</h2>
                <div className="flex flex-col items-center justify-center h-48 border border-dashed border-slate-800 rounded-lg text-slate-500 text-sm">
                  <p>Content for <span className="text-indigo-400 font-medium">{activeTab}</span> section will render here.</p>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}