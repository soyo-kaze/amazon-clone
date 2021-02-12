import React from "react";
import ReactDom from "react-dom";

import "../styles/home.css";

import bg from "../assets/gaming.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home__body">
        <div style={{ height: 60 }}></div>
        <div className="upper__bg">
          <img src={bg} className="bg__image" alt="background image" />
        </div>
        <div className="products__section">
          <div className="products__row">
            <Product
              id="12"
              image="https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
              price={179.99}
              title="This is a title"
              rating={4}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>
          <div className="products__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
