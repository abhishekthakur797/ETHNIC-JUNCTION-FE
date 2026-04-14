"use client";

import { useFilters } from '@/hooks/useFilters';
import { Category, Gender, Size } from '@/lib/types';
import { motion } from 'framer-motion';

const defaultGenders: Gender[] = ['Men', 'Women', 'Unisex'];
const defaultCategories: Category[] = ['T-shirts', 'Shirts', 'Hoodies', 'Custom Print', 'Ethnic', 'Bottoms'];
const defaultSizes: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

export function ProductFilters() {
  const { filters, toggleGender, toggleCategory, toggleSize, setDelivery, clearFilters } = useFilters();

  return (
    <div className="w-full space-y-8 pr-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-ink">Filters</h2>
        <button onClick={clearFilters} className="text-sm font-medium text-muted-text hover:text-ink">
          Clear All
        </button>
      </div>

      {/* Gender Filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-ink">Gender</h3>
        <div className="space-y-2">
          {defaultGenders.map(gender => (
            <label key={gender} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.genders.includes(gender)}
                onChange={() => toggleGender(gender)}
                className="h-4 w-4 rounded border-border-color text-ink focus:ring-ink"
              />
              <span className="text-sm text-ink/80">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-ink">Category</h3>
        <div className="space-y-2">
          {defaultCategories.map(cat => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="h-4 w-4 rounded border-border-color text-ink focus:ring-ink"
              />
              <span className="text-sm text-ink/80">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-ink">Size</h3>
        <div className="flex flex-wrap gap-2">
          {defaultSizes.map(size => {
            const isSelected = filters.sizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-ink bg-ink text-white'
                    : 'border-border-color bg-white text-ink hover:border-ink/50'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Delivery Filter */}
      <div className="space-y-3">
        <h3 className="font-medium text-ink">Delivery Options</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="delivery"
              checked={filters.delivery === 'bengaluru'}
              onChange={() => setDelivery('bengaluru')}
              className="h-4 w-4 border-border-color text-ink focus:ring-ink"
            />
            <span className="text-sm text-ink/80">Bengaluru Same-Day</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="delivery"
              checked={filters.delivery === 'pan-india'}
              onChange={() => setDelivery('pan-india')}
              className="h-4 w-4 border-border-color text-ink focus:ring-ink"
            />
            <span className="text-sm text-ink/80">Pan India Shipping</span>
          </label>
        </div>
      </div>
    </div>
  );
}
