import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer/reducer';
import Form from './components/Form';
import List from './components/List';
import './App.css';

const App = () => {
  // const [todos, setTodos] = useState(data);
  const [todos, dispatch] = useReducer(reducer, initialState)

  const addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      completed: false
    };
    setTodos([...todos, newItem])
  };

  const clearItem = () => {
    setTodos(todos.filter(item => {
      return item.completed === false;
    }));
  };

  const toggleCompleted = id => {
    setTodos(todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    }));
  };

  // searchItem = (query) => {
  //   this.setState({
  //     todos: this.state.todos.filter((item) => {
  //       return item.name.toLowerCase().includes(query.toLowerCase())
  //     })
  //   })
  // }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form addItem={addItem} dispatch={dispatch}/>
      <List todos={todos} toggleCompleted={toggleCompleted} clearItem={clearItem} dispatch={dispatch}/>
    </div>
  );
}

export default App;