import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
    if (text.trim() !== '') {
        onAdd(text);
        setText('');
    }
    };
    
    return (
    <div className="input-group mt-3">
        <input
        type="text"
        className="form-control"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleAdd}>
                Add
            </button>
        </div>
    </div>
    );
};

export default AddTodo;
