import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { getTasks } from '../redux/taskActions';

const TasksLayout = () => {
  const dispatch = useDispatch();

  const tasksData = useSelector(store => store.task);
  const categories = [...new Set(tasksData.map(task => task.category))];

  useEffect(() => {
    dispatch(getTasks(null));
  }, [dispatch]);

  return (
    <div className='tasks-layout'>
      <Sidebar categories={categories} />
      <div className='tasks'>
        <Outlet />
      </div>
    </div>
  )
}

export default TasksLayout