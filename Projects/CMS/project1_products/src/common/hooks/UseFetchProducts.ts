import { useState, useEffect } from "react";
import { getProducts } from "../../services/api";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

export const UseFetchProducts = () => {
  const [products, setProducts] = useState<IProductsEntity[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);
  return { products, loading };
};
