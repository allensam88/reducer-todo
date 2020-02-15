import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Form = () => {
    const [newItem, setNewItem] = useState('')
    const dispatch = useContext(TodoContext);

    const handleChanges = e => {
        setNewItem(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setNewItem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="item"
                id="item"
                placeholder='add an item'
                value={newItem}
                onChange={handleChanges}
                autoComplete='off'
            />
            <button>Add</button>
        </form>
    );
}

export default Form;