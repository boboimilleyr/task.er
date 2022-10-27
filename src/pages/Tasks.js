import { useSelector } from 'react-redux';
import TasksHeader from '../components/TasksHeader'
import TasksList from '../components/TasksList'

const Tasks = () => {
  
  const tasksData = useSelector(store => store.task);

  return (
    <div className='tasks--main'>
      <TasksHeader title={"all tasks"} />
      <TasksList data={tasksData} isFiltered={false} />
    </div>
  )
}

export default Tasks