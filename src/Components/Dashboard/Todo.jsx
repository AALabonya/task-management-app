
import { useDrop } from 'react-dnd';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import DragableTask from './DragableTask';
import Loading from '../../page/Loading';
import useAllTask from '../../hooks/useAllTask';
import toast from 'react-hot-toast';

const Todo = ({ task, onRefetch }) => {

  const { data, isLoading, refetch } = useAllTask();
//   console.log(data)
  const axiosSecure =useAxiosSecure()
  // droppable
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["Ongoing", "TASK"],// Specify the accepted drag type
    drop: (item) => {
    //   console.log("Dropped item:", item); // Log the dropped item
      handleDrop(item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }
  ));

  const handleDrop = async (item) => {
    // console.log("this is item for complete", item._id); // Log the dropped item
    const res = await axiosSecure.patch(`/update/${item._id}?query=todo`);
    if (res.data.modifiedCount > 0) {
      refetch();
      onRefetch()
      toast("Good job!", "Todo!", "success")
    }
  };

if(isLoading){
    return<Loading></Loading>
}
  return (
    <div ref={drop} className={`space-y-3 ${isOver ? 'bg-green-100' : ''}`}>
      <h1 className='bg-yellow-500 text-xl py-3 text-center'>To Do</h1>
      <ul ref={drop} className='space-y-3 text-lg'>
        {
          data?.map(task =>
            task.status === 'todo' &&
            <DragableTask key={task._id} task={task} onRefetch={refetch} />,
            refetch()
          )
        }
      </ul>
    </div>
  )
}

export default Todo;