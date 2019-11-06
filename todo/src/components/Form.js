import React, { useState } from 'react';

const Form = props => {
  const [newItem, setNewItem] = useState('')

  const handleChanges = e => {
    setNewItem(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: 'ADD_ITEM', payload: newItem });
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