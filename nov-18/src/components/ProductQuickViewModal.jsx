import React, { useState, useEffect } from "react";
import {
  X,
  Star,
  ShoppingBag,
  Check,
  Minus,
  Plus,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import LazyImage from "./LazyImage";

const ProductQuickViewModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onViewDetails,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center" });
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImageIdx(0);
      setSelectedVariantIdx(0);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const currentVariant = product.variants[selectedVariantIdx];
  const discountPercent = Math.round(
    ((currentVariant.mrp - currentVariant.price) / currentVariant.mrp) * 100
  );

  const handleVariantChange = (idx) => {
    setSelectedVariantIdx(idx);
    const newStock = product.variants[idx].stock;
    if (quantity > newStock) {
      setQuantity(Math.max(1, newStock));
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%` });
  };

  const handleAddClick = () => {
    onAddToCart(product, currentVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery with Hover Zoom */}
          <div className="p-5 sm:p-6 bg-slate-50/70 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
            <div
              className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-slate-100 cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <LazyImage
                key={product.images[selectedImageIdx]}
                src={product.images[selectedImageIdx]}
                alt={product.name}
                priority
                style={isZoomed ? zoomStyle : undefined}
                wrapperClassName="w-full h-full"
                className={`w-full h-full object-cover transition-transform duration-200 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {product.badge}
                </span>
              )}
            </div>

            {/* Lazy-Loaded Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2.5 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIdx === idx
                        ? "border-emerald-600 ring-2 ring-emerald-600/20"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                  >
                    <LazyImage
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 uppercase tracking-wider">
                <span>{product.category}</span>
              </div>

              <h2
                id="quick-view-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 pr-8"
              >
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {product.rating}
                </span>
                <span className="text-xs text-slate-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                  ₹{currentVariant.price}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{currentVariant.mrp}
                </span>
                {discountPercent > 0 && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Save {discountPercent}%
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                {product.description}
              </p>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-800">
                    Select Pack Size
                  </span>
                  <span
                    className={`font-medium ${
                      currentVariant.stock <= 5
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  >
                    {currentVariant.stock <= 5
                      ? `Only ${currentVariant.stock} left in stock`
                      : "In Stock"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, idx) => {
                    const isSelected = selectedVariantIdx === idx;
                    return (
                      <button
                        key={variant.label}
                        type="button"
                        onClick={() => handleVariantChange(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50 text-emerald-800 shadow-xs"
                            : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                        }`}
                      >
                        {variant.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center border border-slate-200 rounded-xl bg-slate-50/60 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="p-2 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-9 text-center text-sm font-bold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) => Math.min(currentVariant.stock, q + 1))
                    }
                    disabled={quantity >= currentVariant.stock}
                    aria-label="Increase quantity"
                    className="p-2 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddClick}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white shadow-sm transition-all duration-200 ${
                    isAdded
                      ? "bg-emerald-700"
                      : "bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99]"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart • ₹{currentVariant.price * quantity}
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onViewDetails) onViewDetails(product);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
                >
                  View Full Details
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickViewModal;