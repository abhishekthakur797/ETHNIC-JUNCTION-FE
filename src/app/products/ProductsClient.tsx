"use client";

import { useEffect, useMemo, useState } from 'react';
import { useFilters } from '@/hooks/useFilters';
import { Product } from '@/lib/types';
import { ProductFilters } from '@/components/product/ProductFilters';
import { ProductGrid } from '@/components/home/ProductGrid';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProductsClient({ products, initialCategory, initialGender, initialSale }: { products: Product[], initialCategory?: string, initialGender?: string, initialSale?: string }) {
  const { filters, ...filterActions } = useFilters();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Initialize from props if needed
  useEffect(() => {
    if (initialGender && !filters.genders.length) {
      filterActions.toggleGender(
        initialGender.charAt(0).toUpperCase() + initialGender.slice(1) as any
      );
    }
    if (initialCategory && !filters.categories.length) {
      filterActions.toggleCategory(
        initialCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') as any
      );
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // URL Sale filter logic explicitly (for ?sale=true)
    if (initialSale === 'true') {
      result = result.filter(p => p.original_price && p.original_price > p.price);
    }

    if (filters.genders.length > 0) {
      result = result.filter(p => filters.genders.includes(p.gender));
    }
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }
    if (filters.sizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    }
    
    // Delivery isn't bound to products structure in dummy data, we just pretend

    if (filters.sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'newest') {
      result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return result;
  }, [products, filters, initialSale]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Bar Navigation / Sort */}
      <div className="flex flex-col gap-4 border-b border-border-color pb-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-ink">All Products</h1>
        
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <span className="text-sm text-muted-text">{filteredProducts.length} products</span>
          <div className="flex gap-2">
             <select 
               value={filters.sort}
               onChange={(e) => filterActions.setSort(e.target.value as any)}
               className="rounded-md border border-border-color bg-white px-3 py-1.5 text-sm outline-none focus:border-ink"
             >
               <option value="popular">Popular</option>
               <option value="price-low">Price: Low to High</option>
               <option value="newest">Newest</option>
             </select>
             
             <button 
               className="flex items-center gap-2 rounded-md border border-border-color px-3 py-1.5 text-sm lg:hidden focus:border-ink"
               onClick={() => setIsMobileFiltersOpen(true)}
             >
               <SlidersHorizontal className="h-4 w-4" /> Filters
             </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <ProductFilters />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-50 flex h-[80vh] flex-col rounded-t-2xl bg-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border-color p-4">
                <h2 className="text-lg font-bold text-ink">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="rounded-full p-2 hover:bg-black/5">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <ProductFilters />
              </div>
              <div className="border-t border-border-color p-4">
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full rounded-md bg-ink py-3 font-bold text-white transition-colors hover:bg-ink/90"
                >
               Show {filteredProducts.length} Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
