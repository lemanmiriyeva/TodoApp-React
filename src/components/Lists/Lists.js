import React from 'react'
import List from '../List/List'

const Lists = ({todos,onDelete}) => {
  return (
    <div>
      {todos.map(todo=>(
       <List key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete}   />
      ))}
    </div>
  )
}

export default Lists
