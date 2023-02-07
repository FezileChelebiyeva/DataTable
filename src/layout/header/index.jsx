import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <div className="logo">NORTHWIND</div>
      </NavLink>

      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/suppliers-page"}>Suppliers</NavLink>
        </li>
        <li>
          <NavLink to={"/orders-page"}>Orders</NavLink>
        </li>
        <li>
          <NavLink to={"/customers-page"}>Customers</NavLink>
        </li>
        <li>
          <NavLink to={"/products-page"}>Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
