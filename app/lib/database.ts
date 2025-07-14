import { supabase } from './supabase'
import type { Category, Product, ProductVariant, NewCategory, NewProduct, NewProductVariant } from './supabase'

// ============ CATEGORIES ============

export const categoryService = {
  // Get all categories
  async getAll(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')

    if (error) throw error
    return data || []
  },

  // Get category by ID
  async getById(id: string): Promise<Category | null> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Create new category
  async create(category: NewCategory): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update category
  async update(id: string, updates: Partial<NewCategory>): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete category (soft delete)
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('categories')
      .update({ is_active: false })
      .eq('id', id)

    if (error) throw error
  }
}

// ============ PRODUCTS ============

export const productService = {
  // Get all products with category info
  async getAll(): Promise<(Product & { category: Category })[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('is_active', true)
      .order('name')

    if (error) throw error
    return data || []
  },

  // Get products by category
  async getByCategory(categoryId: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .eq('is_active', true)
      .order('name')

    if (error) throw error
    return data || []
  },

  // Get product by ID with variants
  async getById(id: string): Promise<(Product & { variants: ProductVariant[] }) | null> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        variants:product_variants(*)
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Get product by SKU
  async getBySku(sku: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('sku', sku)
      .single()

    if (error) throw error
    return data
  },

  // Create new product
  async create(product: NewProduct): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update product
  async update(id: string, updates: Partial<NewProduct>): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete product (soft delete)
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .update({ is_active: false })
      .eq('id', id)

    if (error) throw error
  },

  // Search products
  async search(query: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,sku.ilike.%${query}%,description.ilike.%${query}%`)
      .eq('is_active', true)
      .order('name')

    if (error) throw error
    return data || []
  }
}

// ============ PRODUCT VARIANTS ============

export const productVariantService = {
  // Get all variants for a product
  async getByProduct(productId: string): Promise<ProductVariant[]> {
    const { data, error } = await supabase
      .from('product_variants')
      .select('*')
      .eq('product_id', productId)
      .eq('is_active', true)
      .order('name')

    if (error) throw error
    return data || []
  },

  // Get variant by ID
  async getById(id: string): Promise<ProductVariant | null> {
    const { data, error } = await supabase
      .from('product_variants')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Get variant by SKU
  async getBySku(sku: string): Promise<ProductVariant | null> {
    const { data, error } = await supabase
      .from('product_variants')
      .select('*')
      .eq('sku', sku)
      .single()

    if (error) throw error
    return data
  },

  // Create new variant
  async create(variant: NewProductVariant): Promise<ProductVariant> {
    const { data, error } = await supabase
      .from('product_variants')
      .insert(variant)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update variant
  async update(id: string, updates: Partial<NewProductVariant>): Promise<ProductVariant> {
    const { data, error } = await supabase
      .from('product_variants')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete variant (soft delete)
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('product_variants')
      .update({ is_active: false })
      .eq('id', id)

    if (error) throw error
  },

  // Update stock quantity
  async updateStock(id: string, quantity: number): Promise<ProductVariant> {
    const { data, error } = await supabase
      .from('product_variants')
      .update({ stock_quantity: quantity })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }
}