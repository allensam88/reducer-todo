import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';
import Form from './Form';
import Todo from './Todo';

const List = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)

    const toggleCompleted = id => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
    };

    const clearItem = () => {
        dispatch({ type: 'CLEAR_ITEM'})
    };

    return (
        <div className="todo-list">
            <Form dispatch={dispatch}/>
        {todos.map(item => (
            <Todo
            key={item.id}
            item={item}
            toggleCompleted={toggleCompleted}
            />
        ))}
        <button className="clear-btn" onClick={clearItem}>
            Clear Item
        </button>
        </div>
    );
};

export default List;