import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Nav() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/account"> Account </Link>
        <Link to="/cart">
        <FaShoppingCart className="cart" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
