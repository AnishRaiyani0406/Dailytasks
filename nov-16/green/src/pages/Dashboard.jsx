import React, { useState } from 'react';

const TABS = ['Overview', 'Orders', 'Subscriptions', 'Profile'];

export default function Dashboard({ orders }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [boxPaused, setBoxPaused] = useState(false);
  const [address, setAddress] = useState('742 Evergreen Terrace, Apt 4B');
  const [savedNotice, setSavedNotice] = useState(false);

  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">My Account</h1>
        <p className="text-sm text-stone-500 mt-0.5">
          Manage your orders, weekly harvest box, and delivery details.
        </p>
      </div>

      
      <div className="flex items-center gap-2 border-b border-stone-200 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition ${
              activeTab === tab
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      {activeTab === 'Overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <p className="text-xs text-stone-500">Total Orders</p>
              <p className="text-2xl font-semibold text-stone-900 mt-1">
                {orders.length}
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <p className="text-xs text-stone-500">Total Spent</p>
              <p className="text-2xl font-semibold text-stone-900 mt-1">
                ₹{totalSpent.toFixed(2)}
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <p className="text-xs text-stone-500">Weekly Harvest Box</p>
              <p className="text-lg font-semibold text-emerald-700 mt-1">
                {boxPaused ? 'Paused' : 'Active · Thursday'}
              </p>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-stone-900">
                Recent Orders
              </h2>
              <button
                onClick={() => setActiveTab('Orders')}
                className="text-xs font-medium text-emerald-700 hover:underline"
              >
                View all
              </button>
            </div>
            <div className="divide-y divide-stone-100">
              {orders.slice(0, 3).map((order) => (
                <div
                  key={order.id}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <p className="text-sm font-medium text-stone-900">
                      {order.id} ·{' '}
                      <span className="text-stone-500 font-normal">
                        {order.date}
                      </span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                      {order.items}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {order.status}
                    </span>
                    <span className="text-sm font-semibold text-stone-900">
                      ₹{order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      
      {activeTab === 'Orders' && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-stone-900">
                    {order.id}
                  </span>
                  <span className="text-xs text-stone-400">· {order.date}</span>
                </div>
                <p className="text-sm text-stone-600">{order.items}</p>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-100">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {order.status}
                </span>
                <span className="text-base font-semibold text-stone-900">
                  ₹{order.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      
      {activeTab === 'Subscriptions' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">
              Weekly Farm Box
            </span>
            <h2 className="text-lg font-semibold text-stone-900">
              Seasonal Organic Harvest Box (Medium)
            </h2>
            <p className="text-sm text-stone-600">
              8–10 varieties of seasonal vegetables & fruits · ₹2200.00 / week
            </p>
            <p className="text-xs text-stone-500">
              Status:{' '}
              <span className="font-medium text-stone-800">
                {boxPaused ? 'Paused until resumed' : 'Next delivery this Thursday'}
              </span>
            </p>
          </div>

          <button
            onClick={() => setBoxPaused(!boxPaused)}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition shrink-0 ${
              boxPaused
                ? 'bg-emerald-700 text-white border-emerald-700 hover:bg-emerald-800'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            {boxPaused ? 'Resume Subscription' : 'Pause Next Delivery'}
          </button>
        </div>
      )}

      
      {activeTab === 'Profile' && (
        <form
          onSubmit={handleSaveProfile}
          className="bg-white border border-stone-200 rounded-xl p-6 max-w-xl space-y-4"
        >
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Maya Lin"
              className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Delivery Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition"
            >
              Save Changes
            </button>
            {savedNotice && (
              <span className="text-xs font-medium text-emerald-700">
                Saved successfully!
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}