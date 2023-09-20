import React from 'react';

const ToDoList = ({children}) => {
    return (
        <section>
            <h2>Tasks List</h2>
            <ul>{children}</ul>
        </section>
    )
};

export { ToDoList };