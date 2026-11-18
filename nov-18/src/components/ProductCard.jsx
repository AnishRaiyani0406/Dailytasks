import React from "react";
import { Eye, Star, ShoppingBag } from "lucide-react";
import LazyImage from "./LazyImage";

const ProductCard = ({ product, onQuickView, onQuickAdd }) => {
  const defaultVariant = product.variants[0];
  const discount = Math.round(
    ((defaultVariant.mrp - defaultVariant.price) / defaultVariant.mrp) * 100
  );

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col">
      {/* Product Image & Quick View Trigger */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <LazyImage
          src={product.images[0]}
          alt={product.name}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Left Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {discount}% OFF
          </span>
        )}

        {/* Quick View Eye Button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          title="Quick View"
          className="
            absolute top-3 right-3 z-10 p-2.5 rounded-full bg-white/95 text-slate-700
            shadow-sm border border-slate-100 hover:bg-emerald-600 hover:text-white
            transition-all duration-200
            opacity-100 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
            focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Bottom Subtle Quick View Pill on Desktop Hover */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="
            hidden sm:flex items-center justify-center gap-1.5
            absolute bottom-3 inset-x-3 z-10 py-2 rounded-xl
            bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-semibold
            border border-slate-200/80 shadow-sm
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
            hover:bg-emerald-600 hover:text-white hover:border-emerald-600
            transition-all duration-200
          "
        >
          <Eye className="w-3.5 h-3.5" />
          Quick View
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>{product.category}</span>
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.rating}
            </span>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-semibold text-slate-900 text-base leading-snug cursor-pointer hover:text-emerald-700 transition-colors line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{defaultVariant.label}</p>
        </div>

        {/* Price & Quick Add */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-slate-900">
              ₹{defaultVariant.price}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ₹{defaultVariant.mrp}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onQuickAdd(product, defaultVariant, 1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;