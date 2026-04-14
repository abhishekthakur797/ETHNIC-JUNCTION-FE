import { Product } from '@/lib/types';
import { ProductCard } from '../product/ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

export function ProductGrid({ products, title, description }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-text">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="mb-10 text-center md:text-left">
            {title && <h2 className="mb-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>}
            {description && <p className="mx-auto md:mx-0 max-w-2xl text-lg text-muted-text">{description}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
