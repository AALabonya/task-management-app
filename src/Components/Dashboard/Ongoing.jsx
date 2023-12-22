/* eslint-disable react/prop-types */
import {useDrop } from 'react-dnd';

import useAllTask from '../../hooks/useAllTask';
import DragableTask from './DragableTask';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../page/Loading';
import toast from 'react-hot-toast';

// eslint-disable-next-line no-unused-vars
const Ongoing = ({ task, onRefetch }) => {

    const { data, isLoading, refetch } = useAllTask();
    console.log(data)
const axiosSecure =useAxiosSecure()
    // droppable
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ["Ongoing", "TASK"],// Specify the accepted drag type
        drop: (item) => {
            console.log("Dropped item:", item); // Log the dropped item
            handleDrop(item)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }
    ));

    const handleDrop = async (item) => {
        console.log("this is item for ongoing", item._id); // Log the dropped item
        const res = await axiosSecure.patch(`/update/${item._id}?query=ongoing`);
        onRefetch()
        toast("Good job!", "Going on!", "success")
        console.log(res.data)
    };

if(isLoading){
    return<Loading></Loading>
}
    return (
        <div ref={drop} className={`space-y-3 ${isOver ? 'bg-red-100' : ''}`}>
            <h1 className='bg-red-500 text-xl py-3 text-center'>Ongoing</h1>
            <ul ref={drop} className='space-y-3 text-lg'>
                {
                    data?.map(task =>
                        task.status === 'ongoing' &&
                        <DragableTask key={task._id} task={task} onRefetch={refetch} />,
                        refetch()
                    )
                }
            </ul>
        </div>
    )
}

export default Ongoing