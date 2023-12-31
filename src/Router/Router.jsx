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
import PrivateRoute from "../Provider/PrivateRoute";


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
                element:<PrivateRoute><Dashboard/></PrivateRoute>,
                children:[
                    {
                        path:"userDashboard",
                        element: <PrivateRoute><UserDashboard/></PrivateRoute>
                    },
                    {
                        path:"createNewTask",
                        element: <PrivateRoute><CreateNewTask/></PrivateRoute>
                    },
                    {
                        path:"seePreviousTask",
                        element:<PrivateRoute><SeePreviousTask/></PrivateRoute>
                    }
                ]
            },
            
        ]
    },

])

export default Router;