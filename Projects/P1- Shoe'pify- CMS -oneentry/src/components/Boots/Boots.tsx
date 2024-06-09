import React, { useEffect, useState } from "react";

import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import Card from "../Card/Card";
import "./Boots.css";

export function Boots({ products }: { products: IProductsEntity[] }) {
  const [boots, setBoots] = useState<IProductsEntity[]>([]);
  useEffect(() => {
    setBoots(
      products.filter(
        (product) => product?.attributeValues?.type?.value?.value === "boots"
      )
    );
  }, [products]);

  return (
    <div className="wrapper">
      {boots.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
