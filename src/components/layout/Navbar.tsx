"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { MobileMenu } from './MobileMenu';
import { cn } from '../ui/Badge';

export function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Men', href: '/products?gender=men' },
    { name: 'Women', href: '/products?gender=women' },
    { name: 'Custom Print', href: '/products?category=custom-print' },
    { name: 'Sale', href: '/products?sale=true' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-color bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Left: Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-ink hover:text-muted-text"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Center/Left: Logo */}
        <div className="flex flex-1 justify-center md:justify-start">
          <Link href="/" className="text-2xl font-bold tracking-tight text-ink">
            Ethnic Junction
          </Link>
        </div>

        {/* Desktop Center: Navigation */}
        <nav className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === '/products' && link.href.includes('products'));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-ink relative py-2',
                  isActive ? 'text-ink' : 'text-muted-text'
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#f0e6ff]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-4 md:flex-1">
          <button aria-label="Search" className="p-2 text-ink hover:text-muted-text">
            <Search className="h-5 w-5" />
          </button>
          
          <Link href="/cart" className="relative p-2 text-ink hover:text-muted-text">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#b5ead7] text-[10px] font-bold text-ink">
                {totalItems}
              </span>
            )}
          </Link>

          <Link href="/login" className="hidden items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/90 md:inline-flex">
            Login
          </Link>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
