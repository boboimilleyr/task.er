import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TasksHeader from '../components/TasksHeader'
import TasksList from '../components/TasksList'
import { getTasks } from '../redux/taskActions'

const Tasks = () => {
  const dispatch = useDispatch();
  
  const tasksData = useSelector(store => store.task);

  useEffect(() => {
    dispatch(getTasks(null));
  }, [dispatch]);

  return (
    <div className='tasks--main'>
      <TasksHeader title={"all tasks"} />
      <TasksList data={tasksData} isFiltered={false} />
    </div>
  )
}

export default Tasks