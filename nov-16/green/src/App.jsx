import React, { useState } from 'react';
import { PRODUCTS, INITIAL_ORDERS } from './data/products';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], qty: 1 },
    { ...PRODUCTS[1], qty: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  const handleAddToCart = (product, qty = 1) => {
    setCart((prev) => {
      const key = product.selectedWeight || product.unit;
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          (item.selectedWeight || item.unit) === key
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const handleUpdateQty = (targetItem, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item !== targetItem));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item === targetItem ? { ...item, qty: newQty } : item
        )
      );
    }
  };

  const handlePlaceOrder = (total) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: 'Just now',
      status: 'Preparing',
      total,
      items: cart.map((i) => `${i.name} (x${i.qty})`).join(', '),
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    setIsCartOpen(false);
    setCurrentPage('dashboard');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 pb-20 md:pb-10">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {currentPage === 'home' && (
          <Home
            products={PRODUCTS}
            searchQuery={searchQuery}
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateQty={handleUpdateQty}
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setCurrentPage('product');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'product' && (
          <ProductDetails
            product={selectedProduct}
            relatedProducts={PRODUCTS.filter((p) => p.id !== selectedProduct.id)}
            onBack={() => setCurrentPage('home')}
            onAddToCart={handleAddToCart}
            onSelectProduct={(product) => setSelectedProduct(product)}
          />
        )}

        {currentPage === 'dashboard' && <Dashboard orders={orders} />}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}