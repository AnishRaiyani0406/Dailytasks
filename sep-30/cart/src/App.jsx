import React, { useState, useMemo } from 'react';
import { Search, Star, Heart, ShoppingBag, Trash2, Plus, Minus, X } from 'lucide-react';
import Filter from './Filter';

const PRODUCTS = [
  { id: 1, title: "Alphonso Mangoes", category: "Fruits & Veggies", price: 499, rating: 4.8, inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Organic Fresh Milk", category: "Dairy & Eggs", price: 68, rating: 4.5, inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Multigrain Bread", category: "Bakery & Fresh", price: 55, rating: 4.1, inStock: true, isOrganic: false, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Avocados", category: "Fruits & Veggies", price: 199, rating: 4.6, inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Cold Pressed Oil", category: "Staples & Oils", price: 220, rating: 4.3, inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Basmati Rice", category: "Staples & Oils", price: 475, rating: 4.7, inStock: false, isOrganic: false, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400" },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCats, setSelectedCats] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [rating, setRating] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [organic, setOrganic] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  // State for Cart, Wishlist, and Wishlist Drawer Visibility
  const [cart, setCart] = useState({}); // { productId: count }
  const [wishlist, setWishlist] = useState([]); // [ productId ]
  const [showWishlistModal, setShowWishlistModal] = useState(false);

  // Toggle Wishlist
  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Cart Functions
  const addToCart = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const toggleCategory = (cat) => {
    setSelectedCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedCats([]);
    setPrice({ min: 0, max: 1000 });
    setRating(0);
    setInStock(false);
    setOrganic(false);
  };

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCats.length > 0 && !selectedCats.includes(p.category)) return false;
      if (p.price < price.min || p.price > price.max) return false;
      if (rating > 0 && p.rating < rating) return false;
      if (inStock && !p.inStock) return false;
      if (organic && !p.isOrganic) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'low') return a.price - b.price;
      if (sortBy === 'high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [search, selectedCats, price, rating, inStock, organic, sortBy]);

  // Wishlisted Products List
  const wishlistedProducts = useMemo(() => {
    return PRODUCTS.filter(p => wishlist.includes(p.id));
  }, [wishlist]);

  const activeFilters = selectedCats.length + (price.min > 0 || price.max < 1000 ? 1 : 0) + (rating > 0 ? 1 : 0) + (inStock ? 1 : 0) + (organic ? 1 : 0);

  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const prod = PRODUCTS.find(p => p.id === Number(id));
    return sum + (prod ? prod.price * qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-6 relative">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header with Wishlist & Cart Counters */}
        <header className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200 justify-between items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-100 rounded-lg text-sm px-3 py-1.5 focus:outline-none"
            >
              <option value="popular">Popular</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Wishlist Button Trigger */}
            <button
              onClick={() => setShowWishlistModal(true)}
              className="flex items-center space-x-1.5 bg-red-50 border border-red-200 hover:bg-red-100 px-3 py-1.5 rounded-lg text-red-700 text-sm font-semibold transition-colors relative"
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Wishlist</span>
              {wishlist.length > 0 && (
                <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Counter */}
            <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-800 text-sm font-semibold">
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              <span>{totalCartItems} items</span>
              {totalCartPrice > 0 && <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">₹{totalCartPrice}</span>}
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Filter
              selectedCategories={selectedCats}
              handleCategoryToggle={toggleCategory}
              priceRange={price}
              setPriceRange={setPrice}
              selectedRating={rating}
              setSelectedRating={setRating}
              organicOnly={organic}
              setOrganicOnly={setOrganic}
              inStockOnly={inStock}
              setInStockOnly={setInStock}
              resetFilters={resetFilters}
              activeFiltersCount={activeFilters}
              products={PRODUCTS}
            />
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => {
                  const isWishlisted = wishlist.includes(product.id);
                  const cartQuantity = cart[product.id] || 0;

                  return (
                    <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow p-3 flex flex-col justify-between relative group">
                      
                      {/* Image Wrapper with Heart Wishlist Toggle */}
                      <div className="w-full aspect-4/3 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3 relative">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                        
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"
                          aria-label="Wishlist"
                        >
                          <Heart 
                            className={`w-4 h-4 transition-colors ${
                              isWishlisted ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">{product.category}</span>
                          <div className="flex items-center space-x-1 text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded text-xs font-bold">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="font-bold text-slate-800 text-sm line-clamp-1">{product.title}</h3>
                        <div className="text-sm font-extrabold text-slate-900">₹{product.price}</div>
                      </div>

                      {/* Add to Cart Actions */}
                      <div>
                        {cartQuantity === 0 ? (
                          <button
                            onClick={() => addToCart(product.id)}
                            disabled={!product.inStock}
                            className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                              product.inStock 
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        ) : (
                          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-1">
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="p-1 bg-white text-emerald-700 hover:bg-emerald-100 rounded transition-colors"
                            >
                              {cartQuantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-red-500" /> : <Minus className="w-3.5 h-3.5" />}
                            </button>
                            <span className="text-xs font-extrabold text-emerald-900 px-2">{cartQuantity}</span>
                            <button
                              onClick={() => addToCart(product.id)}
                              className="p-1 bg-white text-emerald-700 hover:bg-emerald-100 rounded transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl border p-8 text-center text-slate-500 text-sm">
                No products match filters. <button onClick={resetFilters} className="text-emerald-600 font-bold underline">Reset</button>
              </div>
            )}
          </main>
        </div>

      </div>

      {/* Wishlist Side Drawer / Modal */}
      {showWishlistModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between">
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <h2 className="text-lg font-bold text-slate-800">Your Wishlist</h2>
                  <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                    {wishlist.length}
                  </span>
                </div>
                <button
                  onClick={() => setShowWishlistModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Wishlist Item List */}
              <div className="py-4 space-y-3 overflow-y-auto max-h-[75vh]">
                {wishlistedProducts.length > 0 ? (
                  wishlistedProducts.map(product => (
                    <div key={product.id} className="flex items-center justify-between p-2.5 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">{product.title}</h4>
                          <span className="text-xs font-semibold text-emerald-700">₹{product.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => addToCart(product.id)}
                          disabled={!product.inStock}
                          className="text-xs bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 text-white font-semibold px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          Add Cart
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-400 text-sm">
                    <Heart className="w-10 h-10 mx-auto mb-2 opacity-30" />
                    Your wishlist is empty.
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <button
              onClick={() => setShowWishlistModal(false)}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-sm transition-colors"
            >
              Close Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
}