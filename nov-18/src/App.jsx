import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import ProductQuickViewModal from "./components/ProductQuickViewModal";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function AppContent() {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleAddToCart = (product, variant, quantity) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === product.id && item.variantLabel === variant.label
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          variantLabel: variant.label,
          price: variant.price,
          quantity,
        },
      ];
    });

    showToast(`Added ${quantity} × ${product.name} (${variant.label})`);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar totalItems={totalItems} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onQuickView={(prod) => setQuickViewProduct(prod)}
                onQuickAdd={handleAddToCart}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </main>

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onViewDetails={(prod) => {
          setQuickViewProduct(null);
          navigate(`/products/${prod.id}`);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}