import React from 'react';

const ToDoButtons = ({ deleteSelection, completeSelection }) => {
    return (
        <section>
            <button onClick={() => deleteSelection()}>Delete Selected</button>
            <button onClick={() => completeSelection()}>Complete Task</button>
        </section>
    )
};

export { ToDoButtons };