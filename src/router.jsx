import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
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
            {path:"payment",element:<Payment/>},
            {path:"success",element:<OrderSuccess/>}

        ]
    }
]);

export default router;
