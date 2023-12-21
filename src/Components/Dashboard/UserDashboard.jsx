import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../page/Loading";

const UserDashboard = () => {
    const axiosSecure = useAxiosSecure()
    const { data: toDo = [], isLoading } = useQuery({
        queryKey: ['allToDo'],
        queryFn: async () => {
            const res = await axiosSecure.get("/allToDo")
            return res.data;
        }

    })

    console.log(toDo)
     if(isLoading){
        return <Loading/>
     }
    return (
        <div>
            <div className="flex justify-center mt-2 p-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-56">
                    <div className="text-xl py-2 ">
                        <div className="px-2 text-2xl bg-red-300 text-center rounded-md py-2">To-do</div>
                        <div>
                           
                                {
                                    toDo.map((all, index) => <ul key={all._id}><li >{index}. {all.title} </li>
                                    
                                    
                                    </ul>)
                                }
                           
                        </div>



                    </div>
                    <div className=" text-xl py-2">
                        <div className="px-4 text-2xl bg-red-300 text-center rounded-md py-2">On Going</div>
                        <div></div>
                    </div>
                    <div className="text-xl py-2 rounded-md">
                        <div className="px-4 text-2xl bg-red-300 text-center rounded-md py-2">Completed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;