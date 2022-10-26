import { useParams } from 'react-router-dom';

const TasksCategory = () => {
  const { taskCategory } = useParams();

  return (
    <div className='tasks tasks--category'>
      {
        taskCategory
      }
    </div>
  )
}

export default TasksCategory;