import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit}) => {
    const handleDelete = (id) => {
        onDelete(id);
    };

    const handleEdit = (id) => {
        const newText = prompt('Enter new text:');
        onEdit(id, newText);
    };


    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <button onClick={() => handleEdit(task.id)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
