import React from "react";

const Product=React.memo(function Product({name}) {
    console.log("Rendering..............Product Component");
  return (
    <div>
        <h4>{name}</h4>
    </div>
  )
})

export default Product;