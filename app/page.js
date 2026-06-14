"use client";
import React from 'react';

import ProductCard from './ui/ProductCard';
import { productsData } from '@/data/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] pb-10">
      {/* Header element would sit here above the grid */}

      {/* Main Container */}
      <div className="max-w-[1550px] px-2 pt-6">
        
        {/* CSS Columns create the staggered brick-by-brick layout dynamically */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4">
          
          {/* Mapping through your products data */}
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>
    </main>
  );
}