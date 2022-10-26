import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const TasksLayout = () => {
  return (
    <div className='tasks-layout'>
      <Sidebar />
      <div className='tasks-container'>
        <Outlet />
      </div>
    </div>
  )
}

export default TasksLayout