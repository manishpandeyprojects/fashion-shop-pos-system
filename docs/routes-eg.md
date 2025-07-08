import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    // Root layout with authentication
    layout("routes/root-layout.tsx", [

        // Dashboard Home
        index("routes/dashboard/index.tsx"),

        // POINT OF SALE
        // route("pos", "routes/pos/layout.tsx", [
        //   index("routes/pos/index.tsx"), // Main POS interface
        //   route("receipt/:saleId", "routes/pos/receipt.tsx"), // Receipt view
        //   route("refund/:saleId", "routes/pos/refund.tsx"), // Refund processing
        // ]),

        //     // INVENTORY MANAGEMENT
        //     route("inventory", "routes/inventory/layout.tsx", [
        //       index("routes/inventory/index.tsx"), // Inventory overview

        //       // Products
        //       route("products", "routes/inventory/products/layout.tsx", [
        //         index("routes/inventory/products/index.tsx"), // Products list
        //         route("new", "routes/inventory/products/new.tsx"), // Add new product
        //         route(":productId", "routes/inventory/products/detail.tsx", [
        //           index("routes/inventory/products/overview.tsx"), // Product info
        //           route("variants", "routes/inventory/products/variants.tsx"), // Size/color variants
        //           route("history", "routes/inventory/products/history.tsx"), // Sales history
        //           route("edit", "routes/inventory/products/edit.tsx"), // Edit product
        //         ]),
        //       ]),

        //       // Categories
        //       route("categories", "routes/inventory/categories.tsx"),

        //       // Stock Management
        //       route("stock", "routes/inventory/stock/layout.tsx", [
        //         index("routes/inventory/stock/index.tsx"), // Stock overview
        //         route("adjustments", "routes/inventory/stock/adjustments.tsx"), // Stock adjustments
        //         route("low-stock", "routes/inventory/stock/low-stock.tsx"), // Low stock alerts
        //         route("reorder", "routes/inventory/stock/reorder.tsx"), // Reorder management
        //       ]),

        //       // Suppliers
        //       route("suppliers", "routes/inventory/suppliers/layout.tsx", [
        //         index("routes/inventory/suppliers/index.tsx"), // Suppliers list
        //         route("new", "routes/inventory/suppliers/new.tsx"), // Add supplier
        //         route(":supplierId", "routes/inventory/suppliers/detail.tsx"), // Supplier details
        //       ]),
        //     ]),

        //     // SALES & ANALYTICS
        //     route("analytics", "routes/analytics/layout.tsx", [
        //       index("routes/analytics/index.tsx"), // Analytics overview
        //       route("sales", "routes/analytics/sales.tsx"), // Sales analytics
        //       route("best-sellers", "routes/analytics/best-sellers.tsx"), // Best selling products
        //       route("profit-margins", "routes/analytics/profit-margins.tsx"), // Profit analysis
        //       route("trends", "routes/analytics/trends.tsx"), // Fashion trends
        //       route("performance", "routes/analytics/performance.tsx"), // Store performance
        //     ]),

        //     // CUSTOMERS
        //     route("customers", "routes/customers/layout.tsx", [
        //       index("routes/customers/index.tsx"), // Customers list
        //       route("new", "routes/customers/new.tsx"), // Add new customer
        //       route(":customerId", "routes/customers/detail.tsx", [
        //         index("routes/customers/overview.tsx"), // Customer overview
        //         route("purchases", "routes/customers/purchases.tsx"), // Purchase history
        //         route("preferences", "routes/customers/preferences.tsx"), // Size/style preferences
        //         route("loyalty", "routes/customers/loyalty.tsx"), // Loyalty points
        //       ]),
        //       route("segments", "routes/customers/segments.tsx"), // Customer segmentation
        //     ]),

        //     // EXPENSES & FINANCE
        //     route("expenses", "routes/expenses/layout.tsx", [
        //       index("routes/expenses/index.tsx"), // Expenses overview
        //       route("new", "routes/expenses/new.tsx"), // Add expense
        //       route("categories", "routes/expenses/categories.tsx"), // Expense categories
        //       route("reports", "routes/expenses/reports.tsx"), // Expense reports
        //       route("cash-flow", "routes/expenses/cash-flow.tsx"), // Cash flow analysis
        //     ]),

        //     // REPORTS
        //     route("reports", "routes/reports/layout.tsx", [
        //       index("routes/reports/index.tsx"), // Reports overview
        //       route("daily", "routes/reports/daily.tsx"), // Daily reports
        //       route("weekly", "routes/reports/weekly.tsx"), // Weekly reports
        //       route("monthly", "routes/reports/monthly.tsx"), // Monthly reports
        //       route("yearly", "routes/reports/yearly.tsx"), // Yearly reports
        //       route("custom", "routes/reports/custom.tsx"), // Custom reports
        //       route("export", "routes/reports/export.tsx"), // Export data
        //     ]),

        //     // BUSINESS INSIGHTS
        //     route("insights", "routes/insights/layout.tsx", [
        //       index("routes/insights/index.tsx"), // Insights overview
        //       route("sales-tips", "routes/insights/sales-tips.tsx"), // AI sales suggestions
        //       route("inventory-suggestions", "routes/insights/inventory-suggestions.tsx"), // Stock suggestions
        //       route("pricing-optimization", "routes/insights/pricing-optimization.tsx"), // Pricing tips
        //       route("customer-insights", "routes/insights/customer-insights.tsx"), // Customer behavior
        //       route("market-trends", "routes/insights/market-trends.tsx"), // Market analysis
        //     ]),

        //     // SETTINGS
        //     route("settings", "routes/settings/layout.tsx", [
        //       index("routes/settings/index.tsx"), // General settings
        //       route("shop", "routes/settings/shop.tsx"), // Shop configuration
        //       route("taxes", "routes/settings/taxes.tsx"), // Tax settings
        //       route("payments", "routes/settings/payments.tsx"), // Payment methods
        //       route("users", "routes/settings/users.tsx"), // User management
        //       route("notifications", "routes/settings/notifications.tsx"), // Notification settings
        //       route("backup", "routes/settings/backup.tsx"), // Backup & restore
        //       route("integrations", "routes/settings/integrations.tsx"), // Third-party integrations
        //     ]),

        //     // PROFILE & ACCOUNT
        //     route("profile", "routes/profile/layout.tsx", [
        //       index("routes/profile/index.tsx"), // User profile
        //       route("preferences", "routes/profile/preferences.tsx"), // User preferences
        //       route("security", "routes/profile/security.tsx"), // Security settings
        //     ]),

        //     // ERROR PAGES
        //     route("*", "routes/not-found.tsx"), // 404 page

    ]),

    // AUTH ROUTES (outside main layout)
    //   route("login", "routes/auth/login.tsx"),
    //   route("register", "routes/auth/register.tsx"),
    //   route("forgot-password", "routes/auth/forgot-password.tsx"),
    //   route("reset-password", "routes/auth/reset-password.tsx"),

] satisfies RouteConfig;
