import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  Check,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import LazyImage from "../components/LazyImage";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === Number(id));

  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setSelectedImageIdx(0);
    setSelectedVariantIdx(0);
    setQuantity(1);
    setIsAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-900">Product not found</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Storefront
        </Link>
      </div>
    );
  }

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

  const handleAddClick = () => {
    onAddToCart(product, currentVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-emerald-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="p-6 bg-slate-50/70 border-b md:border-b-0 md:border-r border-slate-100">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-slate-100">
            <LazyImage
              key={product.images[selectedImageIdx]}
              src={product.images[selectedImageIdx]}
              alt={product.name}
              priority
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {product.badge}
              </span>
            )}
          </div>

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
                    alt={`${product.name} ${idx + 1}`}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {product.name}
            </h1>

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
              <span className="text-3xl font-bold text-slate-900">
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

            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Pack Size Selector */}
            <div className="mt-6">
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
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.label}
                    type="button"
                    onClick={() => handleVariantChange(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedVariantIdx === idx
                        ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                        : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="inline-flex items-center border border-slate-200 rounded-xl bg-slate-50/60 p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="p-2 rounded-lg text-slate-600 hover:bg-white disabled:opacity-40"
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
                className="p-2 rounded-lg text-slate-600 hover:bg-white disabled:opacity-40"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddClick}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white transition-all ${
                isAdded
                  ? "bg-emerald-700"
                  : "bg-emerald-600 hover:bg-emerald-700"
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;