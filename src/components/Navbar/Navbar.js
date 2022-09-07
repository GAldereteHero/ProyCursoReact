import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./logo.png";

export const NavBar = () => {
  return (
    <>
      <nav
        class="navbar glass-effect"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">More</a>
            <a class="navbar-item">About</a>
            <a class="navbar-item">Products</a>
          </div>
          <div class="navbar-end">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};
