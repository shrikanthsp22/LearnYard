import React, { useEffect, useState } from "react";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import Card from "../Card/Card";
import "./Home.css";

export function Home({ products }: { products: IProductsEntity[] }) {
  return (
    <div className="wrapper">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
