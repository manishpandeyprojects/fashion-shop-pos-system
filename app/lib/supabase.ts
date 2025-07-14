import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

// Get environment variables
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Export types for easier use
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Convenient type exports
export type Category = Tables<'categories'>
export type Product = Tables<'products'>
export type ProductVariant = Tables<'product_variants'>
export type NewCategory = InsertTables<'categories'>
export type NewProduct = InsertTables<'products'>
export type NewProductVariant = InsertTables<'product_variants'>