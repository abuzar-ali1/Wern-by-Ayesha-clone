import React from 'react';

const CartModal = ({ isOpen, onClose, cartItems, onEmptyCart, onCheckout, cartTotal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-2xl rounded shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h5 className="text-lg font-medium text-gray-800">Shopping Cart</h5>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold leading-none">&times;</button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Discount Code */}
          <div className="flex mb-4">
            <input 
              type="text" 
              placeholder="Discount Code" 
              className="flex-1 border border-gray-300 rounded-l-sm px-3 py-1.5 text-sm outline-none"
            />
            <button className="bg-[#6c757d] hover:bg-[#5a6268] text-white px-4 py-1.5 text-sm rounded-r-sm transition-colors">
              Apply
            </button>
          </div>

          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#f8f9fa] text-gray-700 font-medium border-b border-gray-200">
                <tr>
                  <th className="py-2 px-2 w-1/2">Item</th>
                  <th className="py-2 px-2 text-center">Size</th>
                  <th className="py-2 px-2 text-center">Qty</th>
                  <th className="py-2 px-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr><td colSpan="4" className="py-4 text-center text-gray-500">Your cart is empty.</td></tr>
                ) : (
                  cartItems.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-2 text-gray-700">
                        {item.name} - {item.color} @ RS {item.price.toLocaleString()}
                      </td>
                      <td className="py-3 px-2 text-center text-gray-700">{item.selectedSize}</td>
                      <td className="py-3 px-2 text-center text-gray-700">{item.selectedQty}</td>
                      <td className="py-3 px-2 text-right text-gray-700">
                        RS {(item.price * item.selectedQty).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
                {/* Total Row */}
                <tr>
                  <td colSpan="3" className="py-3 px-2 font-bold text-gray-800">Total</td>
                  <td className="py-3 px-2 text-right font-bold text-gray-800">RS {cartTotal.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
          <button 
            onClick={onEmptyCart}
            className="bg-[#dc3545] hover:bg-[#c82333] text-white px-3 py-1.5 text-sm rounded-sm transition-colors"
          >
            Empty Cart
          </button>
          <button 
            onClick={onClose}
            className="bg-[#6c757d] hover:bg-[#5a6268] text-white px-3 py-1.5 text-sm rounded-sm transition-colors"
          >
            Close
          </button>
          <button 
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className="bg-[#28a745] hover:bg-[#218838] text-white px-3 py-1.5 text-sm rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartModal;