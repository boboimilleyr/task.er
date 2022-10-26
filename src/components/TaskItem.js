import React from 'react'

const TaskItem = (props) => {
  return (
    <div className='taskitem'>
      <div className='taskitem_description-container'>
        <div className={`taskitem_circle ${props.isDone ? 'solid' : 'hollow'}`}></div>
        <p className='taskitem_description'>{props.description}</p>
      </div>
      {
        !props.isFiltered && <span className='taskitem_category'>{props.category}</span>
      }
    </div>
  )
}

export default TaskItem