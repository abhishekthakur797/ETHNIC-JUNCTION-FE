"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorTone } from '@/lib/types';
import { ColorSwatch } from './ColorSwatch';

// Convert business color name to Tailwind display class
const colorMap: Record<ColorTone, string> = {
  Lavender: 'bg-[#f0e6ff]',
  Mint: 'bg-[#b5ead7]',
  Blush: 'bg-[#ffd6e0]',
  Ink: 'bg-[#1a1a1a]',
  White: 'bg-[#ffffff]',
  Black: 'bg-[#000000]',
  Navy: 'bg-[#000080]',
  Red: 'bg-[#ff0000]',
};

interface ProductImagesProps {
  images: string[];
  colors: ColorTone[];
  selectedColor: ColorTone;
  onColorChange: (color: ColorTone) => void;
  name: string;
}

export function ProductImages({ images, colors, selectedColor, onColorChange, name }: ProductImagesProps) {
  const primaryImage = images[0];

  return (
    <div className="flex flex-col space-y-6">
      {/* Main Image View */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white shadow-sm border border-border-color">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={selectedColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0 h-full w-full"
          >
            <Image
              src={primaryImage}
              alt={`${name} in ${selectedColor}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Color Overlay Effect for tint */}
            <div 
              className={`absolute inset-0 mix-blend-color opacity-30 ${colorMap[selectedColor]}`}
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Swatches block */}
      {colors.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-medium text-ink">Color: <span className="text-muted-text">{selectedColor}</span></h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((c) => (
              <ColorSwatch 
                key={c}
                color={c} 
                isSelected={c === selectedColor} 
                onClick={onColorChange} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
