/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useState } from 'react';
import ModalShow from '../Shared/ModalShow';

// eslint-disable-next-line no-unused-vars
const DragableTask = ({ task, onRefetch }) => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => setOpen(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        // Specify the drag type as "TASK"
        type: "TASK",
        // Provide item data (task ID) for the drop handling
        item: task,
        // Collect function to get the dragging state
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    const axiosSecure = useAxiosSecure()


    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/delete/${id}`);
        toast("Deleted Successful");
        onRefetch()
        console.log(res.data)
    }
    return (
        <div>
            <li ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="mb-2 bg-white rounded-md">
                {/* Your task item content goes here */}
                <div
                    className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="p-6">
                        <h4 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {task.title}
                        </h4>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {task.description}
                        </p>
                       <div className='flex justify-between'>
                        <p className="block mt-1 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">Deadline: <span className="text-white"><span className='text-black text-sm'>{task.date}</span></span></p>
                        <p className="block mt-1 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700"><span className="text-white"><span className='bg-red-500 px-2 py-1 rounded-lg'>{task.priority}</span></span></p>
                       </div>
                    </div>
                    <div className="flex items-center justify-between p-2">
                        <div className="flex items-center -space-x-3">
                            <button onClick={() => handleDelete(task._id)}
                                className=" text-red-950 w-12 h-12 p-3"><img src="https://i.ibb.co/2k7vTG4/delete-icon-image-15.png" alt="" />
                            </button>
                        </div>
                        <button
                        onClick={()=>setOpen(true) }
                            className=" text-red-950 w-12 h-12 p-3"><img src="https://i.ibb.co/rGSWLcH/792883.png" alt="" />
                        </button>
                    </div>
                </div>
                <ModalShow open={open} setOpen={setOpen} task={task} onRefetch={onRefetch}/>
            </li>
        </div>
    );
};

export default DragableTask;


