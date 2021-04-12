import React from "react";
import ReactDom from "react-dom";

import "../styles/payout.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

const Payout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="payout">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              Subtotal ({basket.length} items): <small>₹</small>{" "}
              <strong>{value}</strong>
            </p>
          )}
          value={basket?.reduce((total, item) => item.price + total, 0)}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
        />
        <button>Proceed to Buy</button>
      </div>
    </>
  );
};

export default Payout;
