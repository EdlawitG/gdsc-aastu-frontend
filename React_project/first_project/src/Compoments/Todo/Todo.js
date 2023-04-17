import React, { useState } from "react";
import "./Todo.css";
import { FaTrash } from "react-icons/fa";
// Import the necessary style file here
function Todo({ todo, setTodo }) {
  const handleDelete = ({ id }) => {
    let updated = [...todo].filter((todos) => todos.id !== id);
    setTodo(updated);
  };

  return (
    <div>
      {todo.map((todo) => (
        <div className="Todo">
          <input type="checkbox" className="check" />
          <label className="label">
            <h3 className="title">{todo.title}</h3>
            <p className="date">April 08, 2023</p>
          </label>
          <button className="remove" onClick={() => handleDelete(todo)}>
            <FaTrash className="trash" />
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

// Create your the component funtion and
// Don't forget to export it!
