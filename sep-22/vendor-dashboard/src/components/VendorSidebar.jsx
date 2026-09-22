import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  Wallet, 
  Settings, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  Store
} from 'lucide-react';

// Accept activeTab and setActiveTab from props
export default function VendorSidebar({ activeTab, setActiveTab }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainNavItems = [
    { label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { label: 'Products', icon: Package, badge: '128' },
    { label: 'Orders', icon: ShoppingBag, badge: '5 New' },
    { label: 'Analytics', icon: TrendingUp, badge: null },
    { label: 'Payouts', icon: Wallet, badge: null },
  ];

  const bottomNavItems = [
    { label: 'Settings', icon: Settings },
    { label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <aside 
      className={`relative h-screen bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-indigo-600 hover:bg-indigo-500 text-white p-1 rounded-full border-2 border-slate-900 transition-colors shadow-md z-10"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Top Header / Store Info */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-indigo-600/20 text-indigo-400 p-2.5 rounded-xl border border-indigo-500/30 shrink-0">
            <Store size={22} />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0 transition-opacity duration-200">
              <h2 className="font-semibold text-white text-sm truncate">TechGear Store</h2>
              <span className="text-xs text-slate-400 truncate">Vendor Portal</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className={`px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : 'block'}`}>
          Menu
        </div>

        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'hover:bg-slate-800/80 text-slate-400 hover:text-slate-200'
              } ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <Icon size={20} className="shrink-0" />
              
              {!isCollapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}

              {!isCollapsed && item.badge && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  isActive 
                    ? 'bg-indigo-800 text-indigo-100' 
                    : 'bg-slate-800 text-indigo-400 border border-slate-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Actions & Settings */}
      <div className="p-3 border-t border-slate-800 space-y-1">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'hover:bg-slate-800/80 text-slate-400 hover:text-slate-200'
              } ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <Icon size={20} className="shrink-0" />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </div>
    </aside>
  );
}