import { defineOneEntry } from "oneentry";
import { configurations } from "../config/config";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";
import { IMenusEntity } from "oneentry/dist/menus/menusInterfaces";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hvZXBpZnkiLCJzZXJpYWxOdW1iZXIiOjEsImlhdCI6MTcxNzY1MjI2NCwiZXhwIjoxNzQ5MTg4MTk0fQ._OkcZNcD6F8odYgMi60eJ76W4vFhNIq56pzxSymWRmE";

const { Pages, Products, Menus } = defineOneEntry(configurations.baseUrl, {
  token: token,
});

/**
 * Gets the pages from the CMS
 *
 * @returns {Promise<IPagesEntity[]>}
 *
 */

export async function getPages(): Promise<ReadonlyArray<IPagesEntity>> {
  const pages: ReadonlyArray<IPagesEntity> = await Pages.getPages();

  console.log("Pages", pages);
  return pages;
}

/**
 * Gets the menus from the CMS
 *
 * @param {string} marker
 * @returns {Promise<IMenusEntity>}
 *
 */

export async function getMenus(marker: string): Promise<IMenusEntity> {
  const menu: IMenusEntity = await Menus.getMenusByMarker(marker);

  console.log("Menus", menu);
  return menu;
}

/**
 * Gets the products from the CMS
 *
 * @returns {Promise<IProductsEntity[]>}
 *
 */

export async function getProducts(): Promise<Array<IProductsEntity>> {
  const products: Array<IProductsEntity> = await Products.getProducts();

  console.log("Products", products);

  return products;
}

export async function getProductsByPageUrl(
  path: string
): Promise<ReadonlyArray<IProductsEntity>> {
  const products: ReadonlyArray<IProductsEntity> =
    await Products.getProductsByPageUrl("sneakers", [], "en_US");

  console.log("Products", products);

  return products;
}

const params = new URLSearchParams({
  langCode: "en_US",
});

export async function getProductsByUrl(
  url: string
): Promise<ReadonlyArray<IProductsEntity>> {
  const body = JSON.stringify([
    {
      attributeMarker: ["shoe_attr_set"],
    },
  ]);
  try {
    const response = await fetch(
      `https://learnyard.oneentry.cloud/api/content/products/page/url/${url}?offset=0&limit=30&${params}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${process.env.REACT_APP_ONE_ENTRY_TOKEN!}`,
        },
        body: body,
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);

    // Optionally, rethrow the error to propagate it to the caller
    throw error;
  }
}
