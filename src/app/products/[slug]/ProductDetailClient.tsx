"use client";

import { useState } from 'react';
import { Product } from '@/lib/types';
import { ProductImages } from '@/components/product/ProductImages';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductGrid } from '@/components/home/ProductGrid';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Visuals */}
        <ProductImages 
          images={product.images} 
          colors={product.colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          name={product.name}
        />

        {/* Right Column: Interaction & Data */}
        <ProductInfo 
          product={product} 
          selectedColor={selectedColor} 
        />
      </div>

      {/* Below the Fold Details */}
      <div className="mt-16 border-t border-border-color pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-ink mb-4">Product Details</h2>
            <div className="prose text-muted-text">
              <p>Experience the ultimate comfort with our specifically engineered fabrics suited for the changing weather of Bengaluru. Ethically sourced and precisely stitched.</p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Premium breathable material</li>
                <li>Carefully tailored fit</li>
                <li>Machine washable</li>
                <li>Bio-washed for zero shrinkage</li>
              </ul>
            </div>
          </div>
          <div>
             <h2 className="text-xl font-bold text-ink mb-4">Size Guide</h2>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-muted-text">
                 <thead className="bg-[#f0e6ff]/50 text-ink">
                   <tr>
                     <th className="p-3 font-semibold rounded-tl-md">Size</th>
                     <th className="p-3 font-semibold">Chest (in)</th>
                     <th className="p-3 font-semibold">Length (in)</th>
                     <th className="p-3 font-semibold rounded-tr-md">Shoulder (in)</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="border-b border-border-color">
                     <td className="p-3 font-medium text-ink">S</td>
                     <td className="p-3">38</td>
                     <td className="p-3">27</td>
                     <td className="p-3">16.5</td>
                   </tr>
                   <tr className="border-b border-border-color">
                     <td className="p-3 font-medium text-ink">M</td>
                     <td className="p-3">40</td>
                     <td className="p-3">28</td>
                     <td className="p-3">17</td>
                   </tr>
                   <tr className="border-b border-border-color">
                     <td className="p-3 font-medium text-ink">L</td>
                     <td className="p-3">42</td>
                     <td className="p-3">29</td>
                     <td className="p-3">17.5</td>
                   </tr>
                   <tr>
                     <td className="p-3 font-medium text-ink">XL</td>
                     <td className="p-3">44</td>
                     <td className="p-3">30</td>
                     <td className="p-3">18</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t border-border-color pt-16">
          <ProductGrid products={relatedProducts} title="You May Also Like" />
        </div>
      )}
    </div>
  );
}
