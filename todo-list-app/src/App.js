// src/App.js

import './App.css';
import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (owner, task, taskStatus) => {
    setTodos([...todos, { id: Date.now(), owner, task, taskStatus }]);
  };

  const handleEditTodo = (id, editedStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, taskStatus: editedStatus } : todo)));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <AddToDo onAdd={handleAddTodo} />
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
