import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Defining Supabase client. Wait to connect to actual DB.
export const supabase = createClient(supabaseUrl, supabaseKey);

// Schema Types mirror
import { Product, Order } from './types';

export type Tables = {
  products: Product;
  orders: Order;
};
