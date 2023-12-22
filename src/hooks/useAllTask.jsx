import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllTask = () => {
    const{user}= useAuth()
    const axiosSecure =useAxiosSecure()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['allToDo', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allToDo?email=${user?.email}`);
            return res.data;
        }
    })
    return { data, isLoading, refetch };
};

export default useAllTask;