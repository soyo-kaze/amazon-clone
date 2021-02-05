import React from "react";
import ReactDom from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

const NotFound = () => {
  return (
    <>
      <div style={{ height: 60 }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <h1>404! Page Not Found</h1>
      </div>
    </>
  );
};

const Cat = () => {
  return (
    <>
      <div style={{ height: 60 }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <h1>CHECKOUT</h1>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
            {/* <Cat /> */}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
          {/* <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
