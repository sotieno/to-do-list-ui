import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
