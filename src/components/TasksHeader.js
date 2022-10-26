import React from 'react'

const TasksHeader = ({title}) => {
  return (
    <header className='tasks_header'>
      <h2 className='tasks_header_title'>{title}</h2>
      <hr />
    </header>
  )
}

export default TasksHeader