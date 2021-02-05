import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

import "./checkout.css";

const Checkout = () => {
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
            <p>Your Amazon Cart is empty.</p>
            <small>
              Check your Saved for later items below or{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                continue shopping.
              </Link>
            </small>
            <div className="space__between" style={{ display: "none" }}>
              Price
            </div>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
              style={{ margin: 10, marginBottom: 0 }}
            />
            <div className="right__wing">
              <p>
                Subtotal (3 items): <small>₹</small> <strong>549.00</strong>
              </p>
              <button>Proceed to Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
