import React, { useState, useMemo } from 'react';
import { Search, Star, Heart, Leaf, SlidersHorizontal } from 'lucide-react';
import Filter from './Filter';

const PRODUCTS = [
  { id: 1, title: "Alphonso Mangoes", category: "Fruits & Veggies", price: 499,  inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Organic Fresh Milk", category: "Dairy & Eggs", price: 68,  inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Multigrain Bread", category: "Bakery & Fresh", price: 55,  inStock: true, isOrganic: false, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: " Avocados", category: "Fruits & Veggies", price: 199,  inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Cold Pressed Oil", category: "Staples & Oils", price: 220,  inStock: true, isOrganic: true, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Basmati Rice", category: "Staples & Oils", price: 475,  inStock: true, isOrganic: false, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400" },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCats, setSelectedCats] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [rating, setRating] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [organic, setOrganic] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

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

  const activeFilters = selectedCats.length + (price.min > 0 || price.max < 1000 ? 1 : 0) + (rating > 0 ? 1 : 0) + (inStock ? 1 : 0) + (organic ? 1 : 0);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Search */}
        <header className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-100 rounded-lg text-sm px-3 py-1.5 focus:outline-none"
          >
            <option value="popular">Popular</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            
          </select>
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

          {/* Product Grid with Adjusted Image Dimensions */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow p-3 flex flex-col justify-between">
                    
                    {/* Fixed Height Image Wrapper */}
                    <div className="w-full aspect-4/3 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="flex justify-between items-start pt-1">
                      <div>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">{product.category}</span>
                        <h3 className="font-bold text-slate-800 text-sm mt-1 line-clamp-1">{product.title}</h3>
                      </div>
                      <span className="text-sm font-extrabold text-slate-900">₹{product.price}</span>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border p-8 text-center text-slate-500 text-sm">
                No products match filters. <button onClick={resetFilters} className="text-emerald-600 font-bold underline">Reset</button>
              </div>
            )}
          </main>
        </div>

      </div>
    </div>
  );
}