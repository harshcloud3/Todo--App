import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  // State to manage the list of to-do items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
    { id: 3, text: 'Submit Assignment', completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (text) => {
    if (text.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to edit a todo
  const editTodo = (id, newText) => {
    if (newText.trim() === '') return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <ToDoList
        todos={todos}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
        onEditTodo={editTodo}
      />
    </div>
  );
};

export default App;