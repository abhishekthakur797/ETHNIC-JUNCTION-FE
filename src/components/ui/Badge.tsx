import { HTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'sale' | 'new' | 'outline' | 'mint' | 'lavender';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-ink text-white',
    sale: 'bg-[#ffd6e0] text-ink', // Blush
    new: 'bg-[#b5ead7] text-ink', // Mint
    outline: 'border border-border-color text-ink bg-transparent',
    mint: 'bg-[#b5ead7] text-ink',
    lavender: 'bg-[#f0e6ff] text-ink',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
