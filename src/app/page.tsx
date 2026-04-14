import { HeroSection } from '@/components/home/HeroSection';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { ProductGrid } from '@/components/home/ProductGrid';
import { products } from '@/lib/sampleData';

export const revalidate = 86400; // SSG daily revalidation

export const metadata = {
  title: 'ThreadHub — Home',
};

export default function Home() {
  // Show first 8 products on home page
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryStrip />
      <ProductGrid 
        products={featuredProducts} 
        title="Trending in Bengaluru" 
        description="Fresh styles dropped this week. Made for the streets, worn everywhere."
      />
    </div>
  );
}
