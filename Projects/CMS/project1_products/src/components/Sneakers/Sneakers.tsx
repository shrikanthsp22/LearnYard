import React, { useEffect, useState } from "react";

import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import Card from "../Card/Card";
import "./Sneakers.css";

export function Sneakers({ products }: { products: IProductsEntity[] }) {
  const [sneakers, setSneakers] = useState<IProductsEntity[]>([]);
  useEffect(() => {
    setSneakers(
      products.filter(
        (product) => product?.attributeValues?.type?.value?.value === "sneakers"
      )
    );
  }, [products]);

  return (
    <div className="wrapper">
      {sneakers.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
