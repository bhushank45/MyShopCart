import React from "react";
import { useState } from "react";
export const MultiInputForm = () => {
  var [user, setUser] = useState({
    uname: "",
    uemail: "",
    upass: "",
    uage: "",
  });
  var setData = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    console.log(key + ":" + val);
    setUser({ ...user, [key]: [val] });
  };
  var handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration done successfully");
    console.log(user);
    // setUser({uname:"xyz",uemail:"xyz@gmail.com",upass:"111",uage:"1"});
    setUser({ uname: "", uemail: "", upass: "", uage: "" });
  };

  return (
    <div>
      <h4>Resigration by using MultiInputForm</h4>

      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          name="uname"
          placeholder="Enter name"
          onChange={setData}
          value={user.uname}
        />
        <br />

        <label>User Email</label>
        <input
          type="email"
          name="uemail"
          onChange={setData}
          value={user.uemail}
        />
        <br />

        <label>User Password</label>
        <input
          type="password"
          name="upass"
          onChange={setData}
          value={user.upass}
        />
        <br />

        <label>User Age</label>
        <input type="number" name="uage" onChange={setData} value={user.uage} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
