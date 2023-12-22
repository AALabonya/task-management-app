import axios from "axios";



const axiosSecure = axios.create({
    baseURL: "https://task-management-app-zeta-indol.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;

