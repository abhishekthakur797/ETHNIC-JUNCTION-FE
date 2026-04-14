import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#f0e6ff] text-ink py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Ethnic Junction</h3>
            <p className="text-sm text-ink/80">
              Premium clothing, custom prints, and authentic ethnic wear tailored for the youth.
            </p>
            <div className="flex items-start space-x-2 text-sm text-ink/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <span>100ft Road, Indiranagar<br />Bengaluru, Karnataka 560038</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-ink/80">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?gender=men" className="hover:text-ink/70">Men</Link></li>
              <li><Link href="/products?gender=women" className="hover:text-ink/70">Women</Link></li>
              <li><Link href="/products?category=custom-print" className="hover:text-ink/70">Custom Print</Link></li>
              <li><Link href="/products?sort=newest" className="hover:text-ink/70">New Arrivals</Link></li>
              <li><Link href="/products?sale=true" className="hover:text-[#ffd6e0] font-medium">Sale</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-ink/70">FAQs</Link></li>
              <li><Link href="/returns" className="hover:text-ink/70">Returns & Exchanges</Link></li>
              <li><Link href="/track" className="hover:text-ink/70">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-ink/70">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-ink/70">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-ink/70">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-y border-l border-border-color px-3 py-2 text-sm focus:border-ink focus:outline-none"
                />
                <button aria-label="Subscribe" className="rounded-r-md bg-ink px-3 py-2 text-white hover:bg-ink/90">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-ink/70">© {new Date().getFullYear()} Ethnic Junction. Made in Bengaluru with love.</p>
          <div className="mt-4 space-x-4 text-sm text-ink/70 sm:mt-0">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.开展w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}
