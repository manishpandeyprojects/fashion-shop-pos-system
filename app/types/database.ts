export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          category_id: string
          sku: string
          barcode: string | null
          base_price: number
          cost_price: number
          tax_rate: number
          is_active: boolean
          has_variants: boolean
          track_inventory: boolean
          minimum_stock: number
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          category_id: string
          sku: string
          barcode?: string | null
          base_price?: number
          cost_price?: number
          tax_rate?: number
          is_active?: boolean
          has_variants?: boolean
          track_inventory?: boolean
          minimum_stock?: number
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          category_id?: string
          sku?: string
          barcode?: string | null
          base_price?: number
          cost_price?: number
          tax_rate?: number
          is_active?: boolean
          has_variants?: boolean
          track_inventory?: boolean
          minimum_stock?: number
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      product_variants: {
        Row: {
          id: string
          product_id: string
          name: string
          sku: string
          barcode: string | null
          price: number
          cost_price: number
          stock_quantity: number
          is_active: boolean
          variant_options: Record<string, any> | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          name: string
          sku: string
          barcode?: string | null
          price?: number
          cost_price?: number
          stock_quantity?: number
          is_active?: boolean
          variant_options?: Record<string, any> | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          name?: string
          sku?: string
          barcode?: string | null
          price?: number
          cost_price?: number
          stock_quantity?: number
          is_active?: boolean
          variant_options?: Record<string, any> | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}