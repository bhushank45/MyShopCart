import React from "react";
import { useState } from "react";
import "../index.css";
export const MultiInputForm = () => {
  var [user, setUser] = useState({
    uname: "",
    uemail: "",
    upass: "",
    uage: "",
  });
  var [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (user.uname === "") {
      newErrors.uname = "username cannot be empty";
    }
    if (user.uemail === "") {
      newErrors.uemail = "email cannot be empty";
    }
    if (user.upass === "") {
      newErrors.upass = "password cannot be empty";
    } else if (user.upass.length < 6) {
      newErrors.upass = "lenght of password should be 6 or more than 6";
    }
    if (user.uage === "") {
      newErrors.uage = "age cannot be empty";
    } else if (user.uage < 18) {
      newErrors.uage = "age of candidate should be more than 18";
    }
    return newErrors;
  };

  var setData = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    console.log(key + ":" + val);
    setUser({ ...user, [key]: val });
  };
  var handleSubmit = (e) => {
    e.preventDefault();
    
    // setUser({uname:"xyz",uemail:"xyz@gmail.com",upass:"111",uage:"1"});
    var validate_errors = validate();
    if (Object.keys(validate_errors).length === 0) {
      alert("Registration done successfully");
      console.log(user);
      setUser({ uname: "", uemail: "", upass: "", uage: "" });
      setErrors({});
    } else {
      setErrors(validate_errors);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register to  ShopKart</h2>

        <form onSubmit={handleSubmit} className="auth">
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="uname"
              onChange={setData}
              value={user.uname}
            />
            <p>{errors.uname}</p>
          </div>

          <div>
            <label>User Email</label>
            <input
              type="email"
              name="uemail"
              onChange={setData}
              value={user.uemail}
            />
            <p>{errors.uemail}</p>
          </div>

          <div>
            <label>User Password</label>
            <input
              type="password"
              name="upass"
              onChange={setData}
              value={user.upass}
            />
            <p>{errors.upass}</p>
          </div>
          <div>
            <label>User Age</label>
            <input
              type="number"
              name="uage"
              onChange={setData}
              value={user.uage}
            />
            <p>{errors.uage}</p>
            <br />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
