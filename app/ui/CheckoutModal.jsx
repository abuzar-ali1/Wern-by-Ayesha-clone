import React from 'react';

const CheckoutModal = ({ isOpen, onClose, onBack, onSubmit, cartTotal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-[500px] rounded shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h5 className="text-lg font-medium text-gray-800">Order Info</h5>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold leading-none">&times;</button>
        </div>

        {/* Form Body */}
        <form onSubmit={onSubmit}>
          <div className="p-4 flex flex-col gap-3">
            
            {/* Input Group Helper */}
            {/* Name */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Name</span>
              <input required type="text" placeholder="Enter Name" className="w-full px-3 py-2 text-sm outline-none bg-white" />
            </div>

            {/* Email */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Email</span>
              <input required type="email" placeholder="Enter email" className="w-full px-3 py-2 text-sm outline-none bg-white" />
            </div>

            {/* Phone */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Phone</span>
              <input required type="tel" placeholder="Enter phone number" className="w-full px-3 py-2 text-sm outline-none bg-white" />
            </div>

            {/* Address */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Address</span>
              <textarea required rows="3" placeholder="Enter full delivery address" className="w-full px-3 py-2 text-sm outline-none bg-white resize-none"></textarea>
            </div>

            {/* Country */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Country</span>
              <select required className="w-full px-3 py-2 text-sm outline-none bg-white text-gray-500 cursor-pointer">
                <option value="">Select A Delivery Country</option>
                <option value="PK">Pakistan</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>

            {/* Order Total (Readonly) */}
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <span className="bg-[#f8f9fa] text-gray-600 px-3 py-2 text-sm border-r border-gray-300 w-24 shrink-0">Order Total</span>
              <div className="w-full px-3 py-2 text-sm bg-[#e9ecef] text-gray-700">
                RS {cartTotal.toLocaleString()}
              </div>
            </div>

          </div>

          {/* Footer Buttons */}
          <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-[#dc3545] hover:bg-[#c82333] text-white px-3 py-1.5 text-sm rounded-sm transition-colors">
              Close
            </button>
            <button type="button" onClick={onBack} className="bg-[#6c757d] hover:bg-[#5a6268] text-white px-3 py-1.5 text-sm rounded-sm transition-colors">
              Back
            </button>
            <button type="submit" className="bg-[#28a745] hover:bg-[#218838] text-white px-3 py-1.5 text-sm rounded-sm transition-colors">
              Place Order
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CheckoutModal;