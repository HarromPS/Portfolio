import React from 'react'

// Named export from Child to Parent Component
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      {/* {console.log(todo.title)} */}
      {/* <h4>{todo.list.title}</h4>
      <p>{todo.list.desc}</p>
      <button className="btn btn-primary">Delete</button> */}

      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>


      {/* Arrow function is passed & onDelete is called inside Arrow function & hence is not called
      directly at the time of rendering */}
      <button className="btn btn-secondary" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>
  )
}
