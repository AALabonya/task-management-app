
import Loading from "../../page/Loading";
import useAuth from "../../hooks/useAuth";
import useAllTask from "../../hooks/useAllTask";
import Todo from "./Todo";
import Ongoing from "./Ongoing";
import CompleteList from "./CompleteList";

const UserDashboard = () => {
    
    const {user} =useAuth()
    const { data, isLoading, refetch } = useAllTask();
    console.log(data)

  
     if(isLoading){
        return <Loading/>
     }
    return (
        <div className="mt-5 ml-3">
            <div className="flex items-center gap-2">
            <img src={user?.photoURL} alt="" className="rounded-full w-32 " /> 
             <h1 className="text-2xl font-semibold">{user && user.displayName ? user.displayName : ''} </h1>
            </div>
            <div className="flex justify-center mt-2 p-5">
           
              
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-44">
                    <div className="text-xl">
                      
                        <div className="mt-2">
                        
                       <Todo/>
                        </div>

                    </div>
                    <div className="text-xl">
                       
                        <div className="mt-2">

                            <Ongoing/>
                        </div>
                    </div>
                    <div className="text-xl rounded-md">
                       
                        <div className="mt-2">
                            <CompleteList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;