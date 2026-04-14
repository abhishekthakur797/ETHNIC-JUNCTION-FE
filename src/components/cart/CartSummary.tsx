"use client";

import { useCart } from '@/hooks/useCart';
import { PriceTag } from '../ui/PriceTag';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function CartSummary() {
  const { totalPrice } = useCart();
  const tax = totalPrice * 0.18; // Approximate GST
  const finalTotal = totalPrice + tax;

  return (
    <div className="rounded-xl border border-border-color bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-ink mb-6">Order Summary</h2>

      <div className="space-y-4 text-sm text-ink/80 border-b border-border-color pb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax (18% GST)</span>
          <span>₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
        </div>
        <div className="flex justify-between text-[#b5ead7] font-medium mix-blend-multiply bg-[#b5ead7]/20 p-2 rounded-md">
          <span className="text-emerald-700">Delivery (Bengaluru)</span>
          <span className="text-emerald-700">Free</span>
        </div>
      </div>

      <div className="flex items-center justify-between py-6">
        <span className="text-base font-bold text-ink">Total</span>
        <PriceTag price={Math.round(finalTotal)} size="lg" />
      </div>

      <button className="w-full rounded-md bg-ink py-4 text-base font-bold text-white transition-all hover:bg-ink/90 active:scale-[0.98]">
        Proceed to Checkout
      </button>

      {/* Trust */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-text">
        <ShieldCheck className="h-5 w-5" />
        <span>Secure encrypted checkout</span>
      </div>
      
      <div className="mt-4 text-center">
        <Link href="/products" className="text-sm font-medium text-ink underline hover:text-ink/70">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
