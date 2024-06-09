import React from "react";
import "./Card.css";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

const Card = ({ product }: { product: IProductsEntity }) => {
  return (
    <div className="card">
      <img
        src={product.attributeValues.image.value.downloadLink}
        alt={product.localizeInfos.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.localizeInfos.title}</h5>
        <p className="card-text">{product.attributeValues.description.value}</p>
        <p className="card-price">₹{product.attributeValues.price.value}</p>
        <button className="add-to-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <defs></defs>
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <circle
                cx="28.88"
                cy="74.33"
                r="6.16"
                transform="  matrix(1 0 0 1 0 0) "
              />
              <circle
                cx="74.59"
                cy="74.33"
                r="6.16"
                transform="  matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
