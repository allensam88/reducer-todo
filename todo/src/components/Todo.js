import React from 'react';
import reducer from '../reducer/reducer';

const Todo = props => {

  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`} 
      onClick={dispatch({ type: 'TOGGLE_COMPLETE', payload: {() => toggleCompleted(props.item.id)}})}
        
        
        
        >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;