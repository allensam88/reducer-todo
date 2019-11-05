import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';
import Todo from './Todo';

const List = props => {

    return (
        <div className="todo-list">
            <Form dispatch={dispatch}/>
        {props.todos.map(item => (
            <Todo
            key={item.id}
            item={item}
            toggleCompleted={props.toggleCompleted}
            dispatch={props.dispatch}
            />
        ))}
        <button className="clear-btn" onClick={dispatch({ type: 'CLEAR_ITEM', payload: })}>
            Clear Item
        </button>
        </div>
    );
};

export default List;