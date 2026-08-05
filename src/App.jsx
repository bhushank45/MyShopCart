import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar";
import { footer } from "./components/footer";
import { Outlet } from "react-router-dom";
import MyProductList from "./Components/MyProductList";
import { UseEffectDemo } from "./UseEffect/UseEffectDemo";

function App() {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      <Navbar />
      {/* <MyProductList name="Laptop" price="₹ 49,000"></MyProductList> */}
      {/* <UseEffectDemo></UseEffectDemo> */}

      <Outlet />
    </>
  );
}

export default App;
