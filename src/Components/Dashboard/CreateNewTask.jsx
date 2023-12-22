import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loading from "../../page/Loading";


const CreateNewTask = () => {
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        setLoading(true);
        const toDos = {
          email: user?.email,
          title: data.title,
          description: data.description,
          date: data.date,
          priority: data.priority,
          status: 'todo',
        };
        axiosSecure.post("/allToDo", toDos).then((res) => {
          if (res.data.insertedId) {
            toast("Task added Successfully");
          }
        });
        setLoading(false);
        reset();
      };

      if(loading){
        return <Loading/>
      }
    return (
        <div>
            <div className="lg:p-20">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:p-10 p-5 bg-slate-300 rounded-xl">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Add Task
              </h1>
           
              <label className="block font-semibold text-base mb-1 text-black dark:text-white">
                Title:
              </label>
                <input
                  {...register("title")}
                  className="block p-2.5 w-full  text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
          
              <label className="block mb-1 mt-3  font-semibold text-base text-gray-900 dark:text-white">
                Description:
              </label>
              <textarea
                {...register("description")}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message here......."
              ></textarea>
              <label className="block font-semibold text-base mb-1 mt-3 text-gray-900 dark:text-white">
                Set Deadline:
              </label>
              <input
                className="mb-2 w-full px-4 py-2 rounded-md bg-gray-50"
                type="date"
                {...register("date")}
              />
              <label className="block mb-1 mt-3 font-semibold text-base text-gray-900 dark:text-white">
                Priority
              </label>
              <select
                className="px-4 py-2 rounded-md bg-gray-50 w-full mb-4"
                {...register("priority")}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
              <button
                type="submit"  
                className="block w-full bg-red-300 py-3  rounded-md mb-1 font-semibold text-base text-gray-900 dark:text-white">
                 Submit
              </button>
            </form>
          </div>
        </div>
    );
};

export default CreateNewTask;