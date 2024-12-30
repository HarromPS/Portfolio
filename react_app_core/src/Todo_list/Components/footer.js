import React from 'react'

export const Footer = () => {
  let app_class={
      position: 'relative',
      top: '30vh',
      width: '100%',
      border: "2px solid red"
  }
  return (
    <div className="my-3 bg-dark text-light py-3" style={app_class}>
      <p className='text-center'>
        CopyRights &copy; www.todos.com
      </p>
    </div>
  )
}
