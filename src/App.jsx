import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar";
import { footer } from "./Components/Footer";
import { Outlet } from "react-router-dom";
import MyProductList from "./Components/MyProductList";
import { UseEffectDemo } from "./UseEffect/UseEffectDemo";
import { ThemeContext } from "./context/ThemeContext";
import ProductInfo from "./Pages/ProductInfo";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Counter from "./Memorization/Counter";

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={state.theme}
      style={{
        minHeight: "100vh",
        backgroundColor: state.theme === "dark" ? "#121212" : "#ffffff",
        color: state.theme === "dark" ? "#ffffff" : "#111827",
      }}
    >
      <Navbar />
      <Outlet />
      <Counter></Counter>
      {/* <ErrorBoundary><ProductInfo/></ErrorBoundary> */}
      
    </div>
  );
}

export default App;
