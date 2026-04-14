"use client";

import { useState } from 'react';
import { Category, Gender, Size } from '@/lib/types';

export interface FilterState {
  genders: Gender[];
  categories: Category[];
  priceRange: [number, number];
  sizes: Size[];
  delivery: 'bengaluru' | 'pan-india' | null;
  sort: 'popular' | 'price-low' | 'newest';
}

const initialFilters: FilterState = {
  genders: [],
  categories: [],
  priceRange: [199, 3000],
  sizes: [],
  delivery: null,
  sort: 'popular'
};

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const toggleGender = (gender: Gender) => {
    setFilters(prev => ({
      ...prev,
      genders: prev.genders.includes(gender)
        ? prev.genders.filter(g => g !== gender)
        : [...prev.genders, gender]
    }));
  };

  const toggleCategory = (category: Category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const toggleSize = (size: Size) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const updatePriceRange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, priceRange: [min, max] }));
  };

  const setDelivery = (val: FilterState['delivery']) => {
    setFilters(prev => ({ ...prev, delivery: val }));
  };

  const setSort = (val: FilterState['sort']) => {
    setFilters(prev => ({ ...prev, sort: val }));
  };

  const clearFilters = () => setFilters(initialFilters);

  return {
    filters,
    toggleGender,
    toggleCategory,
    toggleSize,
    updatePriceRange,
    setDelivery,
    setSort,
    clearFilters
  };
}
