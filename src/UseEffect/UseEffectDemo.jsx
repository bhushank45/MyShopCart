import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const UseEffectDemo = () => {
  useEffect(() => {
    alert("Good Morning Students");
  }, []);

  var [name, setName] = useState("Bhushan");
  var changeName = () => {
    setName("Meharban");
  };
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};
