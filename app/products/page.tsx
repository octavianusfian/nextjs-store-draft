import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

const ProductsPage = async (props: {
  searchParams: Promise<{
    layout?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    company?: string
  }>;
}) => {
  const searchParams = await props.searchParams;


  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const company = searchParams.company || "";
  const minPrice = Number(searchParams.minPrice) || 100;
  const maxPrice = Number(searchParams.maxPrice) || 10000;

  return <ProductsContainer layout={layout} search={search} minPrice={minPrice} maxPrice={maxPrice} company={company}/>;
};

export default ProductsPage;
