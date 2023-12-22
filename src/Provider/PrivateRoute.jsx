/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../page/Loading";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user, loader} = useAuth();
    const location = useLocation()

    if(loader){
        return <Loading></Loading>
    } 
    else if(user){
        return children
    }
    return<Navigate state={location.pathname} to="/signIn"></Navigate>
};


export default PrivetRoute;