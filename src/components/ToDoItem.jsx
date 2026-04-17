// Edit feature implemented
import React, { useState } from 'react';

const ToDoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    if (editValue.trim() !== '') {
      onEdit(todo.id, editValue);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(todo.text);
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleSave}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="todo-actions">
        {!isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-btn"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-btn"
              title="Delete task"
            >
              🗑️
            </button>
          </>
        ) : (
          <>
            <button onClick={handleSave} className="save-btn" title="Save">
              💾
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditValue(todo.text);
              }}
              className="cancel-btn"
              title="Cancel"
            >
              ❌
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;