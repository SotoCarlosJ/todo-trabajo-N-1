import React from 'react';

const ToDoItem = ({ id, title, isChecked, isCompleted, handleDelete, handleEdit }) => {
    return (
        <div className='listItem'
        style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            border: "1px solid white",
            alignItems: "center",
            borderRadius: "5px",
            padding: "5px"              
            }}>
            <input type="checkbox" name={`${title}-checkbox`} id={`${title}-checkbox`}/>
            <li>{title}</li>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => handleEdit(title)}>Edit</button>
            </div>
        </div>      
    )
};

export { ToDoItem };