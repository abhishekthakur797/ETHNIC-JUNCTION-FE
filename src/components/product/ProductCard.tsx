"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/useCart';
import { Badge } from '../ui/Badge';
import { PriceTag } from '../ui/PriceTag';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const isSale = product.original_price && product.original_price > product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // allow link wrap image/title
    addItem({
      id: `${product.id}-${product.sizes[0]}-${product.colors[0]}`,
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0], // default to first available
      color: product.colors[0],
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-ink/5"
    >
      <Link href={`/products/${product.slug}`} className="relative aspect-[3/4] w-full overflow-hidden bg-[#f0e6ff]/20">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges container */}
        <div className="absolute left-2 top-2 flex flex-col gap-2">
          {isSale && <Badge variant="sale">Sale</Badge>}
          {index < 2 && <Badge variant="new">New</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.slug}`} className="mb-1 block">
          <h3 className="font-medium text-ink line-clamp-1">{product.name}</h3>
        </Link>
        
        <p className="mb-4 text-xs text-muted-text">{product.category}</p>
        
        <div className="mt-auto flex items-end justify-between">
          <PriceTag price={product.price} originalPrice={product.original_price} size="md" />
          
          <button
            onClick={handleAddToCart}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-110 active:scale-95 sm:h-auto sm:w-auto sm:rounded-md sm:px-4 sm:py-2"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
