import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";

import { auth } from "../firebaseConfig";
import { useStateValue } from "./StateProvider";

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
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    // get user data!!
    auth.onAuthStateChanged((res) => {
      if (res) {
        dispatch({ type: "SET_USER", user: res });
        console.log("hello");
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <Cat /> */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/user">
            <Header />
            <UserProfile />
          </Route>
          <Route exact path="/">
            <Header />
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
