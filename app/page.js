'use client'; 

import React, { useState } from 'react';
import ProductCard from './ui/ProductCard';
import CheckoutModal from './ui/CheckoutModal';
import CartModal from './ui/CartModal';
import { productsData } from '@/data/data';


export default function Home() {
  // --- STATE MANAGEMENT ---
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // --- LOGIC ---
  
  // 1. Calculate Total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.selectedQty), 0);

  // 2. Add item to cart
  const handleAddToCart = (product, size, qty) => {
    // Check if item with same size already exists
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === size);
    
    if (existingItemIndex >= 0) {
      // Update quantity if it exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].selectedQty += Number(qty);
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, { ...product, selectedSize: size, selectedQty: Number(qty) }]);
    }
    
    // Automatically open cart to show them it was added (like the original site flow)
    setIsCartModalOpen(true);
  };

  // 3. Handle Form Submission
  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // In a real app, you would send data to an API here.
    alert("Order Placed Successfully! Thank you for shopping.");
    
    // Reset flow
    setCart([]);
    setIsCheckoutModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#f4f5f7] pb-10">
      
    
      {/* Product Grid */}
      <div className="max-w-[1550px] px-2 pt-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4">
          {productsData.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} // Pass the function to the card
            />
          ))}
        </div>
      </div>

      {/* --- MODALS --- */}
      
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)}
        cartItems={cart}
        cartTotal={cartTotal}
        onEmptyCart={() => setCart([])}
        onCheckout={() => {
          setIsCartModalOpen(false);
          setIsCheckoutModalOpen(true);
        }}
      />

      <CheckoutModal 
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onBack={() => {
          setIsCheckoutModalOpen(false);
          setIsCartModalOpen(true);
        }}
        onSubmit={handlePlaceOrder}
        cartTotal={cartTotal}
      />

    </main>
  );
}