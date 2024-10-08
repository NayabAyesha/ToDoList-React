import React from 'react'

export default function Listt({todo,ondelete}) {
  return (
    <div>
     <h6>{todo.title}</h6>
     <p>{todo.desc}</p>
  <button className='btn btn-sm' onClick={()=>{ondelete(todo)}}>Delete</button>
     
    </div>
  )
}