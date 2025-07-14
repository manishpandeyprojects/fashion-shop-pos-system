-- Insert sample categories
INSERT INTO categories (name, description, sort_order) VALUES
('Men''s Clothing', 'Clothing items for men', 1),
('Women''s Clothing', 'Clothing items for women', 2),
('Accessories', 'Fashion accessories', 3),
('Footwear', 'Shoes and sandals', 4);

-- Insert sample products
-- Product without variants
INSERT INTO products (name, description, category_id, sku, base_price, cost_price, has_variants, track_inventory) 
VALUES (
    'Classic White T-Shirt',
    'Premium cotton white t-shirt',
    (SELECT id FROM categories WHERE name = 'Men''s Clothing'),
    'MEN-TSH-001',
    29.99,
    15.00,
    false,
    true
);

-- Product with variants
INSERT INTO products (name, description, category_id, sku, base_price, cost_price, has_variants, track_inventory) 
VALUES (
    'Designer Jeans',
    'Premium denim jeans available in multiple sizes',
    (SELECT id FROM categories WHERE name = 'Men''s Clothing'),
    'MEN-JEAN-001',
    79.99,
    40.00,
    true,
    true
);

-- Insert product variants for the jeans
INSERT INTO product_variants (product_id, name, sku, price, cost_price, stock_quantity, variant_options)
SELECT 
    p.id,
    'Designer Jeans - Size ' || size_name,
    'MEN-JEAN-001-' || size_code,
    79.99,
    40.00,
    FLOOR(RANDOM() * 50) + 10, -- Random stock between 10-59
    jsonb_build_object('size', size_name, 'color', 'Blue')
FROM products p,
(VALUES 
    ('S', 'Small'),
    ('M', 'Medium'), 
    ('L', 'Large'),
    ('XL', 'Extra Large')
) AS sizes(size_code, size_name)
WHERE p.sku = 'MEN-JEAN-001';

-- Insert another product with color and size variants
INSERT INTO products (name, description, category_id, sku, base_price, cost_price, has_variants, track_inventory) 
VALUES (
    'Summer Dress',
    'Floral summer dress',
    (SELECT id FROM categories WHERE name = 'Women''s Clothing'),
    'WOM-DRESS-001',
    49.99,
    25.00,
    true,
    true
);

-- Insert variants for summer dress (multiple colors and sizes)
INSERT INTO product_variants (product_id, name, sku, price, cost_price, stock_quantity, variant_options)
SELECT 
    p.id,
    'Summer Dress - ' || color || ' - Size ' || size_name,
    'WOM-DRESS-001-' || SUBSTRING(color, 1, 3) || '-' || size_code,
    49.99,
    25.00,
    FLOOR(RANDOM() * 30) + 5, -- Random stock between 5-34
    jsonb_build_object('size', size_name, 'color', color)
FROM products p,
(VALUES 
    ('S', 'Small'),
    ('M', 'Medium'), 
    ('L', 'Large')
) AS sizes(size_code, size_name),
(VALUES 
    ('Red'),
    ('Blue'),
    ('Green')
) AS colors(color)
WHERE p.sku = 'WOM-DRESS-001';

-- Insert a simple accessory without variants
INSERT INTO products (name, description, category_id, sku, base_price, cost_price, has_variants, track_inventory) 
VALUES (
    'Leather Wallet',
    'Genuine leather wallet',
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'ACC-WAL-001',
    39.99,
    20.00,
    false,
    true
);