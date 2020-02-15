import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer/reducer';
import { TodoContext } from './context/TodoContext';
import Form from './components/Form';
import List from './components/List';
import './App.css';

const App = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TodoContext.Provider value={dispatch}>
                <Form />
            </TodoContext.Provider>
            <TodoContext.Provider value={{ todos, dispatch }}>
                <List />
            </TodoContext.Provider>
        </div>
    );
}

export default App;