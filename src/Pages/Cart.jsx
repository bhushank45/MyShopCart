import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./pages.css";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    addToCart,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      <h3 className="cart-title">All Product from My Cart</h3>
      <div className="cart-grid">
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h4>₹ {product.price}</h4>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity || 1}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-totals">
        <div className="totals-card">
          <p>Total items: {totalItems}</p>
          <p>Total price: ₹ {totalPrice.toFixed(2)}</p>
        </div>
        <button
          className="cart-proceed-btn"
          onClick={() => navigate("/payment")}
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
