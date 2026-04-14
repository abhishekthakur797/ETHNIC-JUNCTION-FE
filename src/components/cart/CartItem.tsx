"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { CartItem as CartItemType } from '@/lib/types';
import { PriceTag } from '../ui/PriceTag';

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-border-color bg-[#f0e6ff]/20 sm:h-32 sm:w-32">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-ink line-clamp-1">
              <Link href={`/products/${item.product_id}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted-text">
              Size: {item.size} {item.color ? `| Color: ${item.color}` : ''}
            </p>
          </div>
          <PriceTag price={item.price} size="md" className="shrink-0" />
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center rounded-md border border-border-color bg-white">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="p-2 text-muted-text hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-sm font-medium text-ink">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 text-muted-text hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
