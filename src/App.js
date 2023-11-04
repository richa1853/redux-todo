import './App.css';

import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createTodo } from './Actions/toDoAction';

function generateUniqueId() {
  const timestamp = new Date().getTime().toString(36);
  const randomChars = Math.random().toString(36).substr(2, 9);
  return timestamp + randomChars;
}

function App(props) {
  
  const [todoText, setTodoText] = useState('');
  const [todosArray, setTodosArray] = useState([]);

  useEffect(() => {
    // Log the updated todosArray when it changes
    console.log('New Todo:', todosArray);
  }, [todosArray]);

  const handleAddTodo = () => {
    if (todoText.trim() === '') {
      return; // Prevent adding empty todos
    }

    // Generate a unique ID for the new todo (e.g., using a UUID library)
    const id = generateUniqueId();
    props.createTodo(id, todoText);

    const newTodo = {
      id,
      text: todoText,
      completed: false, // Assuming initial completion state
    };
     setTodosArray((prevTodos) => [...prevTodos, newTodo]);

    setTodoText('');
  
  }
  
  return (
    <div>
       <div>
        <input
          type="text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todosArray.map(todo=>(
          <li key={todo.id}> 
             {todo.text}
          </li>
        ))}
      </ul>
      
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos, // Assuming 'todos' is the relevant property in your state
  };
};

const mapDispatchToProps={
  createTodo:createTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
