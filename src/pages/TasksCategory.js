import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TasksHeader from '../components/TasksHeader';
import TasksList from '../components/TasksList';

const TasksCategory = () => {
  const { taskCategory } = useParams();
  const tasksData = useSelector(store => store.task);

  return (
    <div className='tasks--category'>
      <TasksHeader title={taskCategory} />
      <TasksList data={tasksData.filter(task => task.category === taskCategory)} isFiltered={true}/>
    </div>
  )
}

export default TasksCategory;