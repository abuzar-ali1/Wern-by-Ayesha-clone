import React, { useState } from 'react';


const ProductCard = ({ product , onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedQty, setSelectedQty] = useState(1);
  return (
    // 'break-inside-avoid mb-4' ensures the masonry layout doesn't break a card across columns
    <div className="break-inside-avoid mb-4 bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
      
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50">
        <img 
          src={product.imageUrl} 
          alt={`${product.name} ${product.color}`} 
          className=" object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Title and Price */}
        <div className="text-[15px] leading-tight">
          <span className="font-semibold text-gray-900">{product.name} - {product.color}</span>
          <span className="text-gray-500 ml-1">- RS {product.price.toLocaleString()}</span>
        </div>

        {/* Description */}
        <p className="text-[13px] text-gray-600 leading-relaxed min-h-[40px]">
          {product.description}
        </p>

        {/* Dropdowns Row */}
        <div className="flex items-center justify-between mt-1">
          
          {/* Size Selector Group */}
          <div className="flex border border-gray-300 rounded-sm overflow-hidden">
            <span className="bg-[#e9ecef] text-gray-700 px-3 py-1.5 text-sm border-r border-gray-300">
              Size
            </span>
            <select className="px-2 py-1.5 text-sm bg-white outline-none cursor-pointer w-14">
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Quantity Selector Group */}
          <div className="flex border border-gray-300 rounded-sm overflow-hidden">
            <span className="bg-[#e9ecef] text-gray-700 px-3 py-1.5 text-sm border-r border-gray-300">
              Qty
            </span>
            <select className="px-2 py-1.5 text-sm bg-white outline-none cursor-pointer w-14">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Add to Cart Button */}
        <button 
        onClick={() => onAddToCart(product, selectedSize, selectedQty)}
        
        className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white py-2 mt-2 rounded-sm font-medium transition-colors text-sm">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;