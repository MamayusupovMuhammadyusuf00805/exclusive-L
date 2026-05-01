import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="bar">
        <div className="container1">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select name="" id="">
            <option value="">English</option>
            <option value="">Russian</option>
            <option value="">German</option>
          </select>
        </div>
      </div>
      <div className="container1">
        <div className="bar1">
          <h1>Exclusive</h1>
          <ul className="nav-links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"about"}>About</NavLink>
              <NavLink to={"log"}>Log in</NavLink>
              <NavLink to={"sign"}>Sign</NavLink>
              <NavLink to={"contact"}>Contact</NavLink>
              <NavLink to={"checkout"}>Checkout</NavLink>
              <NavLink to={"product"}>Product</NavLink>
              <NavLink to={"account"}>Account</NavLink>
              <NavLink to={"mistake"}>Mistake</NavLink>
            </li>
          </ul>
          <form action="" className="gl">
            <input type="text" placeholder="What are you looking for?" />
            <div className="glass">
              <i class="fa-solid fa-magnifying-glass"></i>

              <Link to="/wishlist" className="wishlist-link">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/card" className="card-link">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
