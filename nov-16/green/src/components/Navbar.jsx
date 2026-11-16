import React from 'react';

export default function Navbar({
  currentPage,
  setCurrentPage,
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
}) {
  return (
    <>
      
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
         
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-emerald-700 font-semibold text-lg tracking-tight shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2" />
              </svg>
            </div>
            <span>GreenGrocer</span>
          </button>

          
          <div className="relative flex-1 max-w-md">
            <svg className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentPage !== 'home') setCurrentPage('home');
              }}
              placeholder="Search organic produce..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-600 transition"
            />
          </div>

          
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                currentPage === 'home'
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                currentPage === 'dashboard'
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={onOpenCart}
              className="ml-2 flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-stone-200 flex items-center justify-around h-16 px-2">
        <button
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium ${
            currentPage === 'home' ? 'text-emerald-700' : 'text-stone-500'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Shop</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium text-stone-500"
        >
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-emerald-700 text-white text-[10px] font-semibold px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>

        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium ${
            currentPage === 'dashboard' ? 'text-emerald-700' : 'text-stone-500'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          <span>Account</span>
        </button>
      </nav>
    </>
  );
}