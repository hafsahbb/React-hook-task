import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      setErrors('Task cannot be empty');
      return;
    }
    onAddTask({ title, done: false });
    setTitle('');
    setErrors('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Enter new task"
      />
      <button onClick={handleAdd}>Add Task</button>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
    </div>
  );
}

export default TaskForm;
