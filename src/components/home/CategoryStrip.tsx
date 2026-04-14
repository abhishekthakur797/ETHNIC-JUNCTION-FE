"use client";

import Link from 'next/link';

export function CategoryStrip() {
  const categories = [
    { name: 'Men', href: '/products?gender=men', color: 'bg-ink text-white' },
    { name: 'Women', href: '/products?gender=women', color: 'bg-[#f0e6ff] text-ink' },
    { name: 'Custom Print', href: '/products?category=custom-print', color: 'bg-[#b5ead7] text-ink' },
    { name: 'New Arrivals', href: '/products?sort=newest', color: 'border border-border-color bg-white text-ink' },
  ];

  return (
    <section className="border-b border-border-color bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Quick Categories</h2>
        
        {/* Horizontal scroll on mobile */}
        <div className="flex w-full overflow-x-auto pb-4 pt-2 -mb-4 hide-scrollbar sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`flex-none inline-flex h-12 shrink-0 items-center justify-center rounded-full px-8 text-sm font-bold tracking-wide transition-transform hover:scale-105 ${cat.color}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
