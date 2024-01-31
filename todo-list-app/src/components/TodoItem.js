// src/components/ToDoItem.js

import React, { useState } from 'react';
import EditModal from './EditModal';

const ToDoItem = ({ todo, onEdit, onDelete}) => {
  const [showModal, setShowModal] = useState(false);
  const [editedStatus, setEditedStatus] = useState(todo.taskStatus);

  const handleEditClick = () => {
    setShowModal(true);
    console.log(showModal);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedStatus);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setEditedStatus(todo.taskStatus); // Reset to original status if canceled
    setShowModal(false);
  };

  return (
    <tr>
    <td>{todo.owner}</td>
    <td>{todo.task}</td>
    <td>{todo.taskStatus}</td>
    <td>
      <button className="btn btn-info btn-sm mr-2" onClick={handleEditClick}>
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo.id)}>
        Delete
      </button>

      <EditModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        editedStatus={editedStatus}
        setEditedStatus={setEditedStatus}
        handleSaveEdit={handleSaveEdit}
      />
    </td>
  </tr>
    );
};

export default ToDoItem;
