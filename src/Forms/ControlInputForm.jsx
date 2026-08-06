import React from "react";
import { useState } from "react";

export const ControlInputForm =()=>{
    var [name,setName]=useState();
    var [email,setEmail]=useState();
    var [age,setAge]=useState();


var changeName=(e)=>{
    setName(e.target.value);
    console.log(e.target.value);
}

var changeEmail=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value);
}

var changeAge=(e)=>{
    setAge(e.target.value);
    console.log(e.target.value);
}

var handleSubmit=(e)=>{
    e.PreventDefault();
    var user={name,email,age};
    console.log(user);
    alert("Registration done successfully");
}

return (
  <div>
    <h4>Registration Form Using ControlInputForm</h4>
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div>
        <label>User Name</label>
        <input type="text" name="uname" onChange={changeName} />
        <br />
      </div>
      <div >
        <label>User Email</label>
        <input type="email" name="uemail" onChange={changeEmail} />
        <br />
      </div>
      <div>
        <label>User Age</label>
        <input type="number" name="uage" onChange={changeAge} />
        <br />
      </div>
      <button>Submit</button>
    </form>
    <h5>
      {name}------{email}-----------{age}
    </h5>
  </div>
);
}