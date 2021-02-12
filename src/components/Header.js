import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
// import { Container, Button, DropdownButton, Dropdown } from "react-bootstrap";
import "../styles/header.css";
import logo from "../assets/amazon1.png";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [{ basket, dispatch }] = useStateValue();
  return (
    <>
      {/* Amazon nav-bar */}
      <div className="header__nav">
        {/* logo area */}
        <div className="header__first">
          <Link to="/" class="cart">
            <img className="header__logo" src={logo} alt="amazon.in" />
          </Link>
          <span id="in">.in</span>
        </div>
        {/* address area */}
        <div className="header__second">
          <LocationOnIcon />
          <span class="address">
            <span className="upper__name">Deliver to Guest</span>
            <span className="lower__name">Address</span>
          </span>
        </div>
        {/* search box         */}
        <div className="header__search">
          <select className="header__search__select">
            <option style={{ fontFamily: "Amazon" }}>All</option>
          </select>
          <input type="text" className="header__search__bar"></input>
          <button className="header__search__icon">
            <SearchIcon style={{ fontSize: 30 }} />
          </button>
        </div>
        {/* nav right most section */}
        <div className="header__end">
          {/* language change           */}
          <div className="header__options">
            <span className="lower__name">
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/259/flag-india_1f1ee-1f1f3.png"
                style={{ height: 30 }}
                alt="flag"
              ></img>
              <ArrowDropDownIcon />
            </span>
          </div>
          {/* sign in option           */}
          <div className="header__options" style={{ cursor: "pointer" }}>
            <span className="upper__name">Hello, Guest</span>
            <span
              className="lower__name"
              onClick={() => console.log("clicked")}
            >
              Sign in <ArrowDropDownIcon style={{ fontSize: 20 }} />
            </span>
          </div>
          {/* orders and return option           */}
          <div className="header__options">
            <span className="upper__name">Returns</span>
            <span className="lower__name">& Orders</span>
          </div>
          {/* cart section           */}
          <Link to="/checkout" class="cart">
            <div className="header__second">
              <ShoppingCartOutlinedIcon style={{ fontSize: 35 }} />
              <span>
                <span className="upper__name">{basket.length}</span>
                <span className="lower__name">Cart</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* <h1 className="start">This is it!!</h1> */}
    </>
  );
};

export default Header;
