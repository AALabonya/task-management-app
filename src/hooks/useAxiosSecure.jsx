import axios from "axios";



const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;

// src="https://i.postimg.cc/13Nzyzw4/logooooooooooooooooooo11.jpg"