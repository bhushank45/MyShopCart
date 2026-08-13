import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {state,dispatch}=useContext(ThemeContext);
  return (
    <nav className="navcss d-flex justify-content-between align-items-center">
      <h2 style={{ color: "white" }}>ShopKart</h2>
      <div className="d-flex gap-3 align-items-center">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/products" className="navlink">
          Products
        </Link>
        <Link to="/cart" className="navlink">
          Cart
        </Link>
        <Link to="/login" className="navlink">
          Login
        </Link>
        <Link to="/register" className="navlink">
          Register
        </Link>
        <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};
