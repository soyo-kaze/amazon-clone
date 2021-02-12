import React from "react";
import ReactDom from "react-dom";

import "../styles/product.css";
import { useStateValue } from "./StateProvider";
// import product from "../assets/"; //TO-DO: add product image

const Product = ({ price, title, image, rating, id }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // console.log(state);
    dispatch({
      type: "ADD_TO_BASKET",
      item: { price, title, image, rating, id },
    });
  };

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
        <button onClick={addToBasket}>
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default Product;
