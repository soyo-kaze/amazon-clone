import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

import "../styles/checkout.css";
import CheckItem from "./CheckItem";
import Payout from "./Payout";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div style={{ height: 60 }}></div>
      <div className="check__home">
        <div className="check__head">
          <p>
            <strong>
              Pay faster for all your shopping needs
              <x style={{ color: "#b22222" }}> with Amazon Pay balance</x>
            </strong>
            <br></br>
            Get Instant refund on cancellations | Zero payment failures{" "}
          </p>
        </div>
        <div className="check__page">
          <div className="left__wing">
            <p>
              {basket.length === 0
                ? "Your Amazon Cart is empty."
                : "Shopping Cart"}
            </p>
            <small hidden={basket.length === 0 ? false : true}>
              Check your Saved for later items below or{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                continue shopping.
              </Link>
            </small>
            <div className="space__between" style={{ display: "none" }}>
              Price
            </div>
            {basket.map((item, i) => (
              <CheckItem
                some={i}
                image={item.image}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            ))}
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
              style={{ margin: 10, marginBottom: 0 }}
            />
            <div className="right__wing">
              <Payout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
