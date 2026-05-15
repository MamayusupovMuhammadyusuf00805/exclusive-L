import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav">
      <div className="bar">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Russian</option>
          <option value="">Deutch</option>
        </select>
      </div>

      <div className="container1">
        <div className="bar1">
          <h1>Exclusive</h1>
          <ul className="nav-links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
               <NavLink to={"/sign"}>Sign</NavLink>
            </li>
          </ul>

          <div className="nav-right">
            <form action="" className="gl" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="What are you looking for?" />
              <div className="glass">
                <i className="fa-solid fa-magnifying-glass"></i>
                <Link to="/wishlist" className="wishlist-link">
                  <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to="/card" className="card-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>

                <div className="user-menu-container" ref={menuRef}>
                  <i
                    className={`fa-regular fa-user ${isMenuOpen ? "active-icon" : ""}`}
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}
                  ></i>

                  {isMenuOpen && (
                    <div className="user-dropdown">
                      <Link to="/account" onClick={toggleMenu}>
                        <i className="fa-regular fa-user"></i> Manage My Account
                      </Link>
                      <Link to="/orders" onClick={toggleMenu}>
                        <i className="fa-solid fa-box"></i> My Order
                      </Link>
                      <Link to="/cancellations" onClick={toggleMenu}>
                        <i className="fa-regular fa-circle-xmark"></i> My
                        Cancellations
                      </Link>
                      <Link to="/reviews" onClick={toggleMenu}>
                        <i className="fa-regular fa-star"></i> My Reviews
                      </Link>
                      <Link to="/logout" onClick={toggleMenu}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
