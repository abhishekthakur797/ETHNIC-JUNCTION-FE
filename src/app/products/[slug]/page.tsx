import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/sampleData';
import { ProductDetailClient } from './ProductDetailClient';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    return { title: 'Product Not Found - Ethnic Junction' };
  }

  return {
    title: `${product.name} | Ethnic Junction`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
