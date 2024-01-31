// src/components/AddToDo.js

import React, { useState } from 'react';

const AddToDo = ({ onAdd }) => {
    const [owner, setOwner] = useState('');
    const [task, setTask] = useState('');
    const [taskStatus, setStatus] = useState('');

    const handleAddTodo = () => {
        if (owner.trim() !== '' && task.trim() !== '') {
            onAdd(owner, task, taskStatus);
            setOwner('');
            setTask('');
            setStatus('Backlog'); //Default status on adding task
        }
    };
    
    return (
    <div className="mt-3">
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            />
        </div>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
        </div>
        <div className="form-group mt-2">
            <label htmlFor="status">Select Status</label>
            <select
            id="status"
            className="form-control"
            value={taskStatus}
            onChange={(e) => setStatus(e.target.value)}
            >
                <option value="Backlog">Backlog</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="In Review">In Review</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <button className="btn btn-primary" onClick={handleAddTodo}>
            Add Task
        </button>
    </div>
    );
};

export default AddToDo;

