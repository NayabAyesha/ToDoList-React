import React from 'react';
import Listt from './Listt';

export default function Todos(props) {
  return (
    <div className='container'>
      <h4>To Do List</h4>
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo, index) => (
          <Listt key={index} todo={todo} ondelete={props.ondelete} />
        ))
      )}
    </div>
  );
}
