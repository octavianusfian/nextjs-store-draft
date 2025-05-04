import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";
import FiltersProduct from "./FiltersProduct";

type ProductsContainerProps = {
  layout: string;
  search: string;
  minPrice: number;
  maxPrice: number;
  company: string;
};

const ProductsContainer = async ({
  search,
  layout,
  company,
  minPrice,
  maxPrice,
}: ProductsContainerProps) => {
  const products = await fetchAllProducts({
    search,
    company,
    minPrice,
    maxPrice,
  });

  console.log(products);

  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      <section>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <h4 className="font-medium text-lg ">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <FiltersProduct />
          <div className="flex gap-x-4">
            <Button
              asChild
              size={"icon"}
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              size={"icon"}
              variant={layout === "list" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, No prducts matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
