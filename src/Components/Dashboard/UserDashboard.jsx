
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
                        <ul className='space-y-3 text-lg'>
                       <Todo/>
                    </ul>
                           
                                {/* {
                                    toDo.map((all, index) => <div className="border border-gray-300 rounded-md mb-3" key={all._id}><div >{index+1}. {all.title} </div>
                                            <button 
                                                  className=" text-red-950 w-12 h-12 p-3"><img src="https://i.ibb.co/2k7vTG4/delete-icon-image-15.png" alt="" />
                                                  </button>
                                                  <button 
                                                  className=" text-red-950 w-12 h-12 p-3"><img src="https://i.ibb.co/rGSWLcH/792883.png" alt="" />
                                                  </button>
                                    </div>)
                                }
                            */}
                        </div>



                    </div>
                    <div className=" text-xl">
                       
                        <div>

                            <Ongoing/>
                        </div>
                    </div>
                    <div className="text-xlrounded-md">
                       
                        <div>
                            <CompleteList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;