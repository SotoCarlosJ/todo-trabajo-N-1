import React, { useState } from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';

// estado = tareas[]
// estado = form {}
// evento = submit -> deberia agregar la tarea al array de tareas

/* 
    tareas.map((tarea) => {
        return (
            <div>
                algo
            </div>
        )
    })
*/

const ToDo = () => {
    const [tasks, setTasks] = useState([])
    const [form, setForm] = useState({
        task: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let tasksList = null;
        const hasTask = tasks.includes(form.task);
        !hasTask ? (tasksList = [...tasks, form.task], setTasks(tasksList)) : alert('tarea ya agregada');
    };

    const handleDelete = (param) => {
        const taskIndex = tasks.indexOf(param);
        const newTasks = [...tasks];
        newTasks.splice(taskIndex, 1);
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>To Do List</h1>

            <section>
                <h2>List</h2>
                <ul>
                    {tasks.map(task => <ToDoItem task={task} key={task} handleDelete={handleDelete}/>)}
                </ul>
            </section>

            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="task" id="task" value={form.task} onChange={(e) => handleChange(e)}/>
                    <button>Add</button>
                </form>
            </section>
        </div>
    )
};

export { ToDo };