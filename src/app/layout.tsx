import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CartProvider } from "@/hooks/useCart";

export const metadata: Metadata = {
  title: "ThreadHub — Clothing Store in Bengaluru | Custom Print T-shirts",
  description: "Buy trendy clothes online in Bengaluru. T-shirts, kurtas, hoodies and custom printed shirts. Fast delivery across India.",
  keywords: "buy t-shirts in Bengaluru, custom printed shirts Bangalore, clothing store Bengaluru, college tshirts Bangalore, online clothes shopping Bangalore, SSR, SEO Optimized",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <Breadcrumb />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
