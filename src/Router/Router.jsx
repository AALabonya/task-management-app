import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home/Home";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage";
import Dashboard from "../page/Dashboard/Dashboard";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/signIn",
                element:<SignIn/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            }
        ]
    },

])

export default Router;