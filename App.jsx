import React, { useContext } from 'react';
import TaskForm from './TaskForm';
import { useTasks } from './useTasks';
import { ThemeProvider, ThemeContext } from './ThemeContext';

function AppContent() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '100vh', padding: '20px'
    }}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span 
              style={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleTask(index)}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
