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

    const handleEdit = (param) => {
        let taskEdit = prompt('Edita la tarea desde aca');
        const hasTask = tasks.includes(taskEdit);
        if(!hasTask) {
            const taskIndex = tasks.indexOf(param);
            const newTasks = [...tasks];
            newTasks[taskIndex] = taskEdit;
            setTasks(newTasks);
        } else alert('tarea repetida');
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
                    {tasks.map(task => <ToDoItem task={task} key={task} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
                </ul>
            </section>

            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="task" id="task" value={form.task} onChange={(e) => handleChange(e)}/>
                    <button type='submit'>Add</button>
                </form>
            </section>
        </div>
    )
};

export { ToDo };