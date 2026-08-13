import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MyProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>₹ {product.price}</h4>
      <p>{product.category}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default MyProductList;
