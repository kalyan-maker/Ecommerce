import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "black" }}>
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: "black", borderRadius: "10px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home"
                style={{ color: "black" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Products"
                style={{ color: "black" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Contact"
                style={{ color: "black" }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About" style={{ color: "black" }}>
                About
              </a>
            </li>
          </ul>
          <div className="icons-end justify-content-end">
            <ul className="icons navbar-nav">
              <li className="search nav-item">
                <Link to="/search">
                  <AiOutlineSearch />
                </Link>
              </li>

              <li className="cart nav-item">
                <Link to="/cart">
                  <GiShoppingCart style={{ color: "red" }} />
                </Link>
              </li>
              <li className="profile nav-item">
                <Link to="/login">
                  <FaUser style={{ color: "orange" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
