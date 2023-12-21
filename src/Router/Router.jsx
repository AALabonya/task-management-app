import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home/Home";
import SignIn from "../page/SignIn/SignIn";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/signIn",
                element:<SignIn/>
            }
        ]
    },

])

export default Router;