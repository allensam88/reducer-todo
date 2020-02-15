import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const List = () => {
    const { todos, dispatch } = useContext(TodoContext);

    const toggleCompleted = id => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
    };

    const clearItem = () => {
        dispatch({ type: 'CLEAR_ITEM'})
    };

    return (
        <div className="todo-list">
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