export type Gender = 'Men' | 'Women' | 'Unisex';
export type Category = 'T-shirts' | 'Shirts' | 'Hoodies' | 'Custom Print' | 'Ethnic' | 'Bottoms';
export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ColorTone = 'Lavender' | 'Mint' | 'Blush' | 'Ink' | 'White' | 'Black' | 'Navy' | 'Red';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  original_price: number | null;
  category: Category;
  gender: Gender;
  sizes: Size[];
  colors: ColorTone[]; // Map to hex in UI if needed
  images: string[];
  in_stock: boolean;
  created_at: string;
}

export interface CartItem {
  id: string; // Unique string for cart item (product.id + size + color)
  product_id: string;
  name: string;
  price: number;
  image: string;
  size: Size;
  color?: ColorTone;
  quantity: number;
}

export interface Order {
  id: string;
  user_id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  address: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
}
