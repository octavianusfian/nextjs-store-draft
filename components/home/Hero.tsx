import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="text-center md:text-start">
        <h1 className="text-4xl max-w-2xl font-bold tracking-light sm:text-6xl">
          A Modern Digital Product Marketplace
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Discover high-quality digital assets — from e-books to design
          templates. PixelNest makes it easy to create, share, and shop with
          confidence.
        </p>
        <Button asChild size={"lg"} className="mt-10">
          <Link href={"/products"}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
