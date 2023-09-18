import React from 'react';

const ToDoItem = ({ task, handleEdit, handleDelete }) => {
    return (
        <div
        style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            border: "1px solid white",
            alignItems: "center",
            borderRadius: "5px",
            padding: "5px"              
            }}>
            <input type="checkbox" name={`${task}-checkbox`} id={`${task}-checkbox`}/>
            <li>{task}</li>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <button onClick={() => handleDelete(task)}>Delete</button>
                <button onClick={() => handleEdit(task)}>Edit</button>
            </div>
        </div>      
    )
};

export { ToDoItem };