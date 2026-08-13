import React, { useEffect, useState } from "react";
import MyProductList from "../Components/MyProductList";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <MyProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
