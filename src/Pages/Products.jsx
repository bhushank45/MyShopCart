import React, { useEffect } from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form';
import MyProductList from '../Components/MyProductList';

export const Products = () => {
  var[products,setProducts]=useState([]);
  useEffect((()=>{loadProductData();}),[]);
  var loadProductData=async()=>{
    var res=await fetch("https://fakestoreapi.com/products");
    var data=await res.json();
    setProducts(data);
  }
  return(
    <div>
      <div className='product-container'>
        {products.map((product)=>{
          var{image,title,price,category}=product; //destructuring
            return(
              <MyProductList image={image} title={title} price={price} category={category}/>
              // <div className="p-card">
              // <img src={product.image} alt="" width="150px"/>
              // <h2>{product.title}</h2>
              // <p>{product.price}</p>
              // <p>{product.category}</p> 

              //   <img src={image} alt="" width="150px"/>
              //   <h5>{title}</h5>
              //   <p>{price}</p>
              //   <p>{category}</p>
              // </div>
            )
          }
        )
      }
    </div>
  </div>
  )
}
