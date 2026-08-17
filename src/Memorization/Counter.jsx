import { useState } from "react";
import Product from "./Product";
function Counter(){
    var[count,setCount]=useState(0);
        return (
            <div style={{textAlign:"center",margin:"30px"}}>
                <h4>count :{count}</h4>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            
            <Product name="Laptop"/>
            </div>

        )
}
export default Counter;