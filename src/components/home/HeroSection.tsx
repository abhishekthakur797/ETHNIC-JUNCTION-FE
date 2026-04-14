"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '../ui/Badge';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0e6ff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#b5ead7] blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-64 w-64 -translate-y-1/2 rounded-full bg-[#ffd6e0] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start space-y-6"
          >
            <Badge variant="mint" className="text-sm px-3 py-1">
              🚚 Free Same-Day Delivery in Bengaluru
            </Badge>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-ink md:text-6xl/tight lg:text-7xl/tight">
              Wear Your Vibe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink/60">
                Own The Streets.
              </span>
            </h1>
            
            <p className="max-w-lg text-lg text-ink/80">
              Discover premium casual wear, strictly authentic ethnic pieces, and 
              custom printed tees tailored for the Bengaluru youth ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/products" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-ink px-8 text-base font-medium text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/20"
              >
                Shop Collection
              </Link>
              <Link 
                href="/products?category=custom-print" 
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-ink bg-transparent px-8 text-base font-medium text-ink transition-colors hover:bg-ink/5"
              >
                Custom Prints
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[500px] w-full"
          >
            {/* Main Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-full rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <Image 
                src="https://picsum.photos/seed/hero1/800/1000" 
                alt="Models wearing ThreadHub collection" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            
            {/* Secondary offset image */}
            <div className="absolute left-0 bottom-12 w-[50%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <Image 
                src="https://picsum.photos/seed/hero2/600/800" 
                alt="Custom print T-shirt detail" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
