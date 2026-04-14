import { Metadata } from 'next';
import { products } from '@/lib/sampleData';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: "Shop Collection — ThreadHub",
  description: "Browse our extensive collection of Men's, Women's, and Unisex clothing, including t-shirts, hoodies, and authentic ethnic wear.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
  const gender = typeof resolvedParams.gender === 'string' ? resolvedParams.gender : undefined;
  const sale = typeof resolvedParams.sale === 'string' ? resolvedParams.sale : undefined;

  return (
    <ProductsClient 
      products={products}
      initialCategory={category}
      initialGender={gender}
      initialSale={sale}
    />
  );
}
