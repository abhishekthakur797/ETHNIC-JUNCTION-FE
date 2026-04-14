import { HTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PriceTagProps extends HTMLAttributes<HTMLDivElement> {
  price: number;
  originalPrice?: number | null;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceTag({ price, originalPrice, size = 'md', className, ...props }: PriceTagProps) {
  const isSale = originalPrice && originalPrice > price;
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base font-semibold',
    lg: 'text-2xl font-bold',
  };

  const strikeSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <span className={cn('text-ink', sizeClasses[size])}>
        ₹{price.toLocaleString('en-IN')}
      </span>
      {isSale && (
        <span className={cn('text-muted-text line-through', strikeSizeClasses[size])}>
          ₹{originalPrice.toLocaleString('en-IN')}
        </span>
      )}
    </div>
  );
}
