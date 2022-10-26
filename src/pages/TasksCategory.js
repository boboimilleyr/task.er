import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TasksHeader from '../components/TasksHeader';
import TasksList from '../components/TasksList';
import { getTasks } from '../redux/taskActions';

const TasksCategory = () => {
  const { taskCategory } = useParams();
  const dispatch = useDispatch();
  const tasksData = useSelector(store => store.task);

  useEffect(() => {
    dispatch(getTasks(taskCategory));
  }, [dispatch, taskCategory]);

  return (
    <div className='tasks--category'>
      <TasksHeader title={taskCategory} />
      <TasksList data={tasksData} isFiltered={true}/>
    </div>
  )
}

export default TasksCategory;