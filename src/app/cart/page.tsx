"use client";

import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-6 rounded-full bg-[#f0e6ff] p-6">
          <ShoppingBag className="h-12 w-12 text-ink" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Your cart is empty</h1>
        <p className="mt-4 text-lg text-muted-text">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/products"
          className="mt-8 rounded-md bg-ink px-8 py-3 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-ink/90 hover:shadow-lg"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl pb-6 border-b border-border-color">
        Your Cart <span className="text-muted-text text-2xl font-medium ml-2">({totalItems} items)</span>
      </h1>

      <div className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7 xl:col-span-8">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          
          <ul role="list" className="divide-y divide-border-color">
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section aria-labelledby="summary-heading" className="mt-16 rounded-xl bg-white lg:col-span-5 lg:mt-0 xl:col-span-4">
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>
          <CartSummary />
        </section>
      </div>
    </div>
  );
}
