import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/root-layout.tsx", [

        index("routes/dashboard/index.tsx"),
        route("/all-products", "routes/products/all-products.tsx"),
        
        // route("*", "routes/not-found.tsx"), // 404 page

    ]),

] satisfies RouteConfig;
