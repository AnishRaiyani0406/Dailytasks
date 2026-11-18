import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Leaf } from "lucide-react";

const Navbar = ({ totalItems }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Green<span className="text-emerald-600">Basket</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-sm">
          <ShoppingBag className="w-4 h-4 text-emerald-600" />
          <span>Cart ({totalItems})</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;