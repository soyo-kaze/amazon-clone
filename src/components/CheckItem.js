import React from "react";

import "../styles/checkitem.css";
import { useStateValue } from "./StateProvider";

const CheckItem = ({ price, title, image, rating, some }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    // console.log(some);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      key: some,
    });
  };
  return (
    <>
      <div className="checkitem__body">
        <img src={image} alt="product image" />
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
          <button onClick={removeItem}>
            <span>Remove from Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckItem;
