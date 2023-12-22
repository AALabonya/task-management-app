import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home/Home";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage";
import Dashboard from "../page/Dashboard/Dashboard";
import UserDashboard from "../Components/Dashboard/UserDashboard";
import CreateNewTask from "../Components/Dashboard/CreateNewTask";
import SeePreviousTask from "../Components/Dashboard/SeePreviousTask";
import About from "../page/About/About";


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
               path:"/about",
               element:<About/>
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
                path:"dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:"userDashboard",
                        element:<UserDashboard/>
                    },
                    {
                        path:"createNewTask",
                        element:<CreateNewTask/>
                    },
                    {
                        path:"seePreviousTask",
                        element:<SeePreviousTask/>
                    }
                ]
            },
            
        ]
    },

])

export default Router;