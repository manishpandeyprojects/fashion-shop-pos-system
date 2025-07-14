import AppBreadcrumb from "~/components/custom/breadcrumb/AppBreadcrumb";

export default function PageAllProducts() {
  return (
    <>
      <AppBreadcrumb
        items={[{ label: "Home", href: "/" }, { label: "All Products" }]}
      />
      <h1>All Products Page</h1>
    </>
  );
}
