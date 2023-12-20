import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home/Home";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },

])

export default Router;