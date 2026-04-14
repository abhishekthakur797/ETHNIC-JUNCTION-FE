"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface LinkItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-sm bg-white p-6 shadow-xl md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={onClose} className="text-2xl font-bold text-ink">
                ThreadHub
              </Link>
              <button onClick={onClose} aria-label="Close Menu" className="p-2 text-muted-text hover:text-ink">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-ink hover:text-muted-text"
                >
                  {link.name}
                </Link>
              ))}
              <div className="my-4 border-t border-border-color pt-4">
                <Link
                  href="/login"
                  onClick={onClose}
                  className="inline-block rounded-md bg-[#f0e6ff] px-4 py-2 font-medium text-ink"
                >
                  Login / Register
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
