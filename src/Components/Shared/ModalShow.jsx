/* eslint-disable react/prop-types */



import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalShow = ({open, setOpen, task, onRefetch}) => {

    const handleClose= ()=>{
        setOpen(false)
    }
    const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  

  const onSubmit = (data) => {
    console.log(task._id, task.title);
    const toDos = {
      title: data.title,
      description: data.description,
      date: data.date,
      priority: data.priority,
      status: 'todo',
    };
    axiosSecure.put(`/updateTask/${task._id}`, toDos)
    .then((res) => {
        console.log(res.data);
      if (res.data.modifiedCount > 0) {
        onRefetch()
        toast(`Updated Done`);
        
      }
    });
    
    reset();
  };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div>
      <div>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:p-10 p-5 bg-slate-300 rounded-xl">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Add Task
              </h1>
           
              <label className="block font-semibold text-base mb-1 text-black dark:text-white">
                Title:
              </label>
                <input
                        defaultValue={task.title}
                  {...register("title")}
                  className="block p-2.5 w-full  text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
          
              <label className="block mb-1 mt-3  font-semibold text-base text-gray-900 dark:text-white">
                Description:
              </label>
              <textarea
              defaultValue={task.description}
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
              defaultValue={task.date}
                className="mb-2 w-full px-4 py-2 rounded-md bg-gray-50"
                type="date"
                {...register("date")}
              />
              <label className="block mb-1 mt-3 font-semibold text-base text-gray-900 dark:text-white">
                Priority
              </label>
              <select
              defaultValue={task.priority}
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
                Update
              </button>
            </form>
          </div>
        </div>
    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalShow;

