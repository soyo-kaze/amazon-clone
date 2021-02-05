import React from "react";
import ReactDom from "react-dom";

import "./product.css";
// import product from "../assets/"; //TO-DO: add product image

const Product = ({ price, title, image, rating }) => {
  return (
    <>
      <div className="product__body">
        <div className="info">
          <p>{title}</p>
          <p className="price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="rating">
            {Array(rating)
              .fill()
              .map((x, i) => (
                <span>⭐</span>
              ))}
          </div>
        </div>
        <img src={image} alt="product image" />
        <button>
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default Product;
