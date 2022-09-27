import { React } from "react";
import { Link } from "react-router-dom";
import {CartWidget} from "../CartWidget/CartWidget"
import logo from "./logo.png";

export const NavBar = () => {
  const productCategories = [
    { id: 0, name: "Frutos secos", link: "/category/frutossecos" },
    { id: 1, name: "Frutas", link: "/category/frutas" },
    { id: 2, name: "Verduras", link: "/category/verduras" },
    { id: 3, name: "Lacteos", link: "/category/lacteos" },
  ];

  return (
    <>
      <nav
        className="navbar glass-effect"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {productCategories.map((category) => {
              return (
                <Link
                  className="navbar-item"
                  key={category.id}
                  to={category.link}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
