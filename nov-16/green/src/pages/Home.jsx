import React, { useState } from 'react';

const CATEGORIES = ['All', 'Vegetables', 'Fruits', 'Leafy Greens', 'Pantry'];

export default function Home({
  products,
  searchQuery,
  cart,
  onAddToCart,
  onUpdateQty,
  onSelectProduct,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCartItem = (productId) =>
    cart.find((item) => item.id === productId);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-8">
     
      <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <span className="inline-block text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
            Harvested Today · Free Delivery over ₹2500
          </span>
          <h1 className="text-2xl md:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
            Fresh organic groceries, straight from local farms.
          </h1>
          <p className="text-sm md:text-base text-stone-600">
            Morning-picked vegetables, seasonal fruit, and small-batch pantry staples delivered to your doorstep.
          </p>
        </div>
        <a
          href="#catalog"
          className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition shrink-0"
        >
          <span>Shop Today's Harvest</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </a>
      </section>

      
      <section id="catalog" className="space-y-5">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition ${
                selectedCategory === category
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-xl p-12 text-center text-stone-500 text-sm">
            No produce found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => {
              const inCart = getCartItem(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-stone-300 transition"
                >
                  <div>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="block w-full aspect-[4/3] overflow-hidden bg-stone-100"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </button>

                    <div className="p-3.5 md:p-4">
                      <span className="text-[11px] font-medium text-stone-500">
                        {product.category}
                      </span>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="block text-left mt-0.5 text-sm md:text-base font-medium text-stone-900 hover:text-emerald-700 line-clamp-1"
                      >
                        {product.name}
                      </button>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {product.unit}
                      </p>
                    </div>
                  </div>

                 
                  <div className="px-3.5 pb-3.5 md:px-4 md:pb-4 flex items-center justify-between gap-2">
                    <span className="text-sm md:text-base font-semibold text-stone-900">
                      ₹{product.price.toFixed(2)}
                    </span>

                    {inCart ? (
                      <div className="flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 rounded-lg px-1.5 py-1">
                        <button
                          onClick={() => onUpdateQty(inCart, inCart.qty - 1)}
                          className="p-1 text-emerald-800 hover:bg-emerald-100 rounded"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                        </button>
                        <span className="text-xs font-semibold text-emerald-900 w-4 text-center">
                          {inCart.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(inCart, inCart.qty + 1)}
                          className="p-1 text-emerald-800 hover:bg-emerald-100 rounded"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" /></svg>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(product)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" /></svg>
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}