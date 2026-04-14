"use client";

import { cn } from '../ui/Badge';
import { ColorTone } from '@/lib/types';

interface ColorSwatchProps {
  color: ColorTone;
  isSelected?: boolean;
  onClick?: (color: ColorTone) => void;
}

// Convert business color name to Tailwind display class
const colorMap: Record<ColorTone, string> = {
  Lavender: 'bg-[#f0e6ff]',
  Mint: 'bg-[#b5ead7]',
  Blush: 'bg-[#ffd6e0]',
  Ink: 'bg-[#1a1a1a]',
  White: 'bg-[#ffffff] border border-border-color',
  Black: 'bg-[#000000]',
  Navy: 'bg-[#000080]',
  Red: 'bg-[#ff0000]',
};

export function ColorSwatch({ color, isSelected = false, onClick }: ColorSwatchProps) {
  return (
    <button
      onClick={() => onClick?.(color)}
      aria-label={`Select color ${color}`}
      className={cn(
        'group relative flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2',
        isSelected ? 'ring-2 ring-ink ring-offset-2' : ''
      )}
    >
      <span className={cn('absolute inset-0 rounded-full', colorMap[color])} />
      <span className="sr-only">{color}</span>
    </button>
  );
}
