import React from 'react';
import { SlidersHorizontal, RefreshCw, Star, Leaf } from 'lucide-react';

export const CATEGORIES = [
  "Fruits & Veggies",
  "Dairy & Eggs",
  "Bakery & Fresh",
  "Staples & Oils",
  "Beverages",
  "Snacks & Nuts"
];

export const PRICE_PRESETS = [
  { label: "All", min: 0, max: 1000 },
  { label: "< ₹100", min: 0, max: 100 },
  { label: "₹100-250", min: 100, max: 250 },
  { label: "₹250-500", min: 250, max: 500 },
  { label: "₹500+", min: 500, max: 1000 },
];

export const RATINGS = [4.5, 4.0, 3.5];

export function Filter({
  selectedCategories = [],
  handleCategoryToggle,
  priceRange = { min: 0, max: 1000 },
  setPriceRange,
  selectedRating = 0,
  setSelectedRating,
  organicOnly = false,
  setOrganicOnly,
  inStockOnly = false,
  setInStockOnly,
  resetFilters,
  activeFiltersCount = 0,
  products = []
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-5">
      
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2 font-bold text-slate-800">
          <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
          <span>Filters</span>
        </div>
        {activeFiltersCount > 0 && (
          <button 
            onClick={resetFilters}
            className="text-xs font-semibold text-emerald-600 hover:underline flex items-center space-x-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase">Categories</span>
        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategories.includes(cat);
            const count = products.filter(p => p.category === cat).length;
            return (
              <label key={cat} className="flex items-center justify-between text-sm cursor-pointer hover:text-emerald-600">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleCategoryToggle(cat)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className={isSelected ? 'font-semibold text-emerald-700' : 'text-slate-700'}>{cat}</span>
                </div>
                <span className="text-xs text-slate-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-400 uppercase">Max Price</span>
          <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            ₹{priceRange.max === 1000 ? '1000+' : priceRange.max}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange.max}
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
          className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
        />
        <div className="flex flex-wrap gap-1">
          {PRICE_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setPriceRange({ min: preset.min, max: preset.max })}
              className={`text-xs px-2 py-1 rounded-md transition-all ${
                priceRange.min === preset.min && priceRange.max === preset.max
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-2 pt-3 border-t border-slate-100">
        <span className="text-xs font-bold text-slate-400 uppercase">Minimum Rating</span>
        <div className="space-y-1">
          {RATINGS.map((minRating) => (
            <button
              key={minRating}
              type="button"
              onClick={() => setSelectedRating(selectedRating === minRating ? 0 : minRating)}
              className={`w-full flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                selectedRating === minRating
                  ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center space-x-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{minRating} & Up</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="pt-3 border-t border-slate-100 space-y-2 text-sm">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="flex items-center text-slate-700">
            <Leaf className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
            Organic Only
          </span>
          <input
            type="checkbox"
            checked={organicOnly}
            onChange={(e) => setOrganicOnly(e.target.checked)}
            className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-slate-700">In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
          />
        </label>
      </div>

    </div>
  );
}

export default Filter;