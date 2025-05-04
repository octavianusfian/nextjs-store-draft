'use client'

import FormInput from "../form/FormInput";
import PriceInput from "../form/PriceInput";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";

const FiltersProduct = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [company, setCompany] = useState("");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleFilters = () => {
    const params = new URLSearchParams(searchParams);

    params.set("company", company);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());

    replace(`/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end">
      <FormInput
        name="company"
        type="search"
        label="Search Company"
        required={false}
        value={company}
        onChange={(value) => setCompany(value)}
      />
      <PriceInput
        label="min"
        required={false}
        value={+minPrice}
        onChange={(value) => setMinPrice(+value)}
      />
      <PriceInput
        label="max"
        required={false}
        value={+maxPrice}
        onChange={(value) => setMaxPrice(+value)}
      />
      <Button onClick={handleFilters} className="mb-2">Search</Button>
    </div>
  );
};

export default FiltersProduct;
