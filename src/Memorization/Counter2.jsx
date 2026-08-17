import React, { useState } from "react";
import { useMemo } from "react";

function Counter2() {
    var[a,setA]=useState(10);
    var[b,setB]=useState(20);
    var[count,setCount]=useState(0);
    function add(){
        console.log("calculating add...");
        return a+b;
    }
    var res=useMemo(()=>add(a,b),[a,b]);
    // var res=add(a,b);
    console.log("res:"+res);
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setA(a+1)}>Change A</button>
        </div>
    )
}

export default Counter2;