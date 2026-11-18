import React from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = ({ onQuickView, onQuickAdd }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Fresh Organic Picks
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Click the eye icon on any product to preview pack sizes and details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onQuickAdd={onQuickAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;