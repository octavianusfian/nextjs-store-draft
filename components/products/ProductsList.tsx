import React from "react";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid gap-y-8 mt-12">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarAmounts = formatCurrency(price);
        const productId = product.id;
        return (
          <article className="group relative" key={productId}>
            <Link href={`products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover w-full rounded"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold capitalize">{name}</h2>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {dollarAmounts}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
