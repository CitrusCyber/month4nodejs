import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';
import tasksArray from './components/Massiv';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState(tasksArray);
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleAdd = (text) => {
        const newTask = { id: tasks.length + 1, text };
        setTasks([...tasks, newTask]);
    };

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleEdit = (id, newText) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    const findTaskById = (idToSearch) => {
        const task = tasks.find((task) => task.id === idToSearch);
        return task ? task : null;
    };

    const handleSearch = () => {
        const result = findTaskById(parseInt(searchId, 10));
        setSearchResult(result || 'Task Not Found');
    };

    return (
        <div>
            <AddTodo onAdd={handleAdd} />
            <input
                type="text"
                placeholder="Enter Task ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onSearch={findTaskById}
            />
            {searchResult && typeof searchResult === 'object' && (
                <p>
                    Found Task: ID {searchResult.id}, Text: {searchResult.text}
                </p>
            )}
            {searchResult && typeof searchResult === 'string' && (
                <p>{searchResult}</p>
            )}
        </div>
    );
};

export default App;
