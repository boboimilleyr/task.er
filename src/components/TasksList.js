import React from 'react'
import TaskItem from './TaskItem'

const TasksList = ({ data, isFiltered }) => {
  
  return (
    <>
      <ul className='taskslist'>
        {
          data.map(item => {
            return (
              <li key={item.id} className='taskitem-container'>
                <TaskItem {...item} isFiltered={isFiltered}/>
              </li>
            );
          })
        }
      </ul>
      <button className='btn btn--fw btn--light'>+</button>
    </>
  )
}

export default TasksList