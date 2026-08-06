import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navcss">
      <Link to="/" className="navlink">Home</Link>
      <Link to="/products" className="navlink">Products</Link>
      <Link to="/cart" className="navlink">Cart</Link>
      <Link to="/login" className="navlink">Login</Link>
      <Link to="/register" className="navlink">Register</Link>
    </nav>
  );
};
