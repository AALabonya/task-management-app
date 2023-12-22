
import { useDrop } from 'react-dnd';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAllTask from '../../hooks/useAllTask';
import Loading from '../../page/Loading';
import DragableTask from './DragableTask';
import toast from 'react-hot-toast';


const CompleteList = ({ task, onRefetch }) => {
    const axiosSecure  = useAxiosSecure()
    const { data, isLoading, refetch } = useAllTask();
    console.log(data)

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
        console.log("this is item for complete", item._id); // Log the dropped item
        const res = await axiosSecure.patch(`/update/${item._id}?query=complete`);
        if (res.data.modifiedCount > 0) {
            toast("Good job!", "Todo!", "success")
            refetch();
            onRefetch()
           
        }
    };

       if(isLoading){
    return<Loading></Loading>
      }

    return (
        <div ref={drop} className={`space-y-3 ${isOver ? 'bg-green-100' : ''}`}>
            <h1 className='bg-green-500 text-xl py-3 text-center'>Completed</h1>
            <ul ref={drop} className='space-y-3 text-lg'>
                {
                    data?.map(task =>
                        task.status === 'complete' &&
                        <DragableTask key={task._id} task={task} onRefetch={refetch} />,
                        refetch()
                    )
                }
            </ul>
        </div>
    )
};

export default CompleteList;