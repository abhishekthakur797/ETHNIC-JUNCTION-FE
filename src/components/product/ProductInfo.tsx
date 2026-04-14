"use client";

import { useState } from 'react';
import { Product, Size, ColorTone } from '@/lib/types';
import { PriceTag } from '../ui/PriceTag';
import { useCart } from '@/hooks/useCart';
import { Heart, Minus, Plus, ShieldCheck, Truck, RefreshCw, MessageCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ProductInfoProps {
  product: Product;
  selectedColor: ColorTone;
}

export function ProductInfo({ product, selectedColor }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {product.name}
      </h1>
      
      <div className="mt-4 flex items-center gap-4 border-b border-border-color pb-6">
        <PriceTag price={product.price} originalPrice={product.original_price} size="lg" />
        {product.original_price && product.original_price > product.price && (
          <Badge variant="sale" className="text-sm px-3 py-1">On Sale</Badge>
        )}
      </div>

      <div className="mt-6 space-y-6">
        <p className="text-base text-muted-text">
          {product.description}
        </p>

        {/* Size Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-ink">Size</h3>
            <button className="text-sm font-medium text-muted-text underline hover:text-ink">Size Guide</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex h-12 w-12 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'border-ink bg-ink text-white'
                    : 'border-border-color bg-white text-ink hover:border-ink/50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-ink">Quantity</h3>
          <div className="flex items-center w-32 border border-border-color rounded-md bg-white">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="flex-1 px-3 py-2 text-muted-text hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4 mx-auto" />
            </button>
            <span className="flex-1 text-center font-medium text-ink">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="flex-1 px-3 py-2 text-muted-text hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 rounded-md bg-ink py-4 text-base font-bold text-white transition-all hover:bg-ink/90 hover:shadow-lg focus:outline-none active:scale-[0.98]"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
              isWishlisted ? 'border-[#ffd6e0] bg-[#ffd6e0] text-ink' : 'border-border-color text-muted-text hover:border-[#ffd6e0]'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Delivery & Trust Badges */}
        <div className="mt-8 space-y-4 rounded-xl border border-border-color bg-white p-6">
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-ink shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-ink">Free delivery in Bengaluru</p>
              <p className="text-sm text-muted-text">Ships pan India within 48 hours</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-border-color pt-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck className="h-5 w-5 text-ink" />
              <span className="text-xs font-medium">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RefreshCw className="h-5 w-5 text-ink" />
              <span className="text-xs font-medium">Easy Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center col-span-2 sm:col-span-1">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <span className="text-xs font-medium">WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
