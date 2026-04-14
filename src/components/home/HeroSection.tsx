"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-white px-2 py-4 sm:px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Amazon/Flipkart style Banner Container */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 shadow-2xl h-[450px] lg:h-[500px]">
          
          {/* Abstract festive accents */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-pink-500 blur-3xl mix-blend-screen" />
            <div className="absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-400 blur-3xl mix-blend-screen" />
          </div>

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between z-10 px-6 sm:px-12 lg:px-20 h-full">
            
            {/* Left Content - Typography & CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col items-start justify-center pt-8 md:pt-0 pb-8 h-full z-20 space-y-4 md:space-y-6"
            >
              <div className="inline-flex items-center rounded-full border-2 border-yellow-400 bg-yellow-400/10 px-4 py-1.5 text-sm font-bold text-yellow-400 backdrop-blur-sm">
                ⭐ BIGGEST FASHION FESTIVAL ⭐
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black italic tracking-tighter text-white uppercase drop-shadow-md leading-none">
                MEGA SALE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                  LIVE NOW
                </span>
              </h1>

              <div className="inline-block bg-white text-blue-900 font-black text-2xl sm:text-3xl px-4 py-2 rotate-[-2deg] shadow-lg">
                50-80% OFF
              </div>
              
              <p className="max-w-md text-lg font-medium text-white/90 drop-shadow">
                Grab the best deals on Men's Streetwear & beautiful Women's Ethnic collections.
              </p>
              
              <Link 
                href="/products" 
                className="mt-6 inline-flex h-14 items-center justify-center rounded-md bg-yellow-400 px-10 text-lg font-bold text-blue-950 transition-all hover:bg-yellow-300 hover:scale-105 hover:shadow-xl shadow-yellow-500/20"
              >
                SHOP NOW
              </Link>
            </motion.div>

            {/* Right Content - Images floating */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex flex-1 relative h-full w-full items-end justify-center pb-4"
            >
              {/* Product Image 1 - Men's Ethnic */}
              <div className="absolute right-[45%] bottom-0 z-10 w-64 h-[400px] transform rotate-[-4deg] transition-transform hover:rotate-[-2deg] hover:z-30">
                <div className="relative w-full h-full rounded-2xl border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1597983073493-272e70e28ec4?auto=format&fit=crop&q=80&w=800" 
                    alt="Men's Kurta Sale" 
                    fill 
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
                    UNDER ₹999
                  </div>
                </div>
              </div>

              {/* Product Image 2 - Women's Ethnic */}
              <div className="absolute right-0 bottom-4 z-20 w-72 h-[420px] transform rotate-[3deg] transition-transform hover:rotate-[1deg] hover:scale-105">
                <div className="relative w-full h-full rounded-2xl border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1617255959957-c8c7d425712e?auto=format&fit=crop&q=80&w=800" 
                    alt="Women's Lehenga Sale" 
                    fill 
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
                    MIN 60% OFF
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
