// Using map to render todos
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onAddTodo, onDeleteTodo, onToggleComplete, onEditTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter a task!');
      return;
    }
    onAddTodo(inputValue);
    setInputValue('');
    setError('');
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <div className="add-todo-section">
        <form onSubmit={handleSubmit} className="add-todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (error) setError('');
            }}
            placeholder="What do you need to do?"
            className="todo-input"
          />
          <button type="submit" className="add-btn">+ Add Task</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        
        <div className="stats-bar">
          <span>📋 Total: {todos.length} tasks</span>
          <span className="completed-count">✅ Completed: {completedCount}</span>
        </div>
      </div>

      <div className="todo-list">
        <h2>Your Tasks</h2>
        {todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🎉</div>
            <p>No tasks yet! Add one above.</p>
          </div>
        ) : (
          todos.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteTodo}
              onToggleComplete={onToggleComplete}
              onEdit={onEditTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;