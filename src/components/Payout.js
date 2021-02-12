import React from "react";
import ReactDom from "react-dom";

import "../styles/payout.css";
import { useStateValue } from "./StateProvider";

const Payout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="payout">
        <p>
          Subtotal ({basket.length} items): <small>₹</small>{" "}
          <strong>
            {basket.reduce((total, item) => item.price + total, 0)}
          </strong>
        </p>
        <button>Proceed to Buy</button>
      </div>
    </>
  );
};

export default Payout;
