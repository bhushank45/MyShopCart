import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { ControlInputForm } from "./Forms/ControlInputForm";
import { MultiInputForm } from "./Forms/MultiInputForm";
import Payment from "./Pages/Payment";
import OrderSuccess from "./Pages/OrderSuccess";

const router=createBrowserRouter([
    {
        path:"/",element:<App/>,
        children :
            [
            {path:"",element:<Home/>},
            {path:"products",element:<Products/>},
            {path:"cart",element:<Cart/>},
            {path:"login",element:<Login/>},
            {path:"register",element:<MultiInputForm/>},
            {path:"Payment",element:<Payment/>},
            {path:"Success",element:<OrderSuccess/>}

        ]
    }
]);

export default router;
