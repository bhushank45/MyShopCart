import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/products" style={{ marginRight: "20px" }}>
        Products
      </Link>
    </div>
  );
};
