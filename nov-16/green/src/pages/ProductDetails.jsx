import React, { useState } from 'react';

const WEIGHT_OPTIONS = [
  { label: 'Standard', multiplier: 1 },
  { label: 'Double Pack (2x)', multiplier: 1.9 },
  { label: 'Family Box (4x)', multiplier: 3.6 },
];

export default function ProductDetails({
  product,
  relatedProducts,
  onBack,
  onAddToCart,
  onSelectProduct,
}) {
  const [selectedOption, setSelectedOption] = useState(WEIGHT_OPTIONS[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const unitPrice = product.price * selectedOption.multiplier;

  const handleAdd = () => {
    onAddToCart(
      {
        ...product,
        price: unitPrice,
        selectedWeight: `${product.unit} · ${selectedOption.label}`,
      },
      quantity
    );
    setQuantity(1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7-7-7 7-7" /></svg>
        <span>Back to Produce</span>
      </button>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 bg-white border border-stone-200 rounded-2xl p-5 md:p-8">
        
        <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-stone-700">
                <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span className="font-medium">{product.rating}</span>
                <span className="text-stone-400">({product.reviews})</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-stone-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <svg className="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>{product.origin}</span>
            </div>

            <p className="text-2xl font-semibold text-stone-900 pt-1">
              ₹{unitPrice.toFixed(2)}{' '}
              <span className="text-xs font-normal text-stone-500">
                / {product.unit}
              </span>
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          
          <div className="space-y-2">
            <label className="text-xs font-medium text-stone-700 uppercase tracking-wider">
              Select Pack Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {WEIGHT_OPTIONS.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelectedOption(option)}
                  className={`py-2.5 px-2 text-xs font-medium rounded-lg border text-center transition ${
                    selectedOption.label === option.label
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-900'
                      : 'border-stone-200 text-stone-600 hover:border-stone-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

         
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center border border-stone-200 rounded-lg h-11 px-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1.5 text-stone-600 hover:text-stone-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
              </button>
              <span className="w-8 text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1.5 text-stone-600 hover:text-stone-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" /></svg>
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 h-11 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg>
              <span>Add to Basket · ₹{(unitPrice * quantity).toFixed(2)}</span>
            </button>
          </div>

          
          <div className="pt-4 border-t border-stone-100">
            <h3 className="text-xs font-medium text-stone-700 uppercase tracking-wider mb-3">
              Nutrition Highlights (Per 100g)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.nutrition.map((item) => (
                <div
                  key={item.label}
                  className="bg-stone-50 border border-stone-200/70 rounded-lg p-2.5"
                >
                  <p className="text-[11px] text-stone-500">{item.label}</p>
                  <p className="text-sm font-semibold text-stone-900 mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-stone-900">
          Goes Well With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectProduct(item);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-stone-200 rounded-xl p-3 flex items-center gap-3 text-left hover:border-stone-300 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-stone-900 truncate">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-500">{item.unit}</p>
                <p className="text-sm font-semibold text-emerald-700 mt-1">
                  ₹{item.price.toFixed(2)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}