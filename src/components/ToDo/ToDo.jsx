import React, { useState } from 'react';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';

const INITIAL_FORM_STATE = {
    id: null,
    title: "",
    isChecked: false,
    isCompleted: false
};

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Comprobando si la nueva tarea ya esta incluida en la lista de tareas (igualando ambos string a lower case y eliminando todos los espacios)
        const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") == form.title.toLowerCase().replace(/ /g, ""));
        // Si la nueva tarea esta repetida enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con la nueva tarea
        hasTask ? alert("Esta repetida") : setTasks([...tasks, {...form, id: window.crypto.randomUUID()}]);
        setForm(INITIAL_FORM_STATE)
    };

    const handleDelete = (param) => {
        const itemIndex = tasks.findIndex(task => task.id == param);
        const newTasks = [...tasks];
        newTasks.splice(itemIndex, 1);
        setTasks(newTasks);
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

    const deleteSelection = () => {
        const list = document.getElementsByClassName('listItem');
        const items = [...list]
        const itemsFiltered = items.filter(item => item.children[0].checked === false);
        const newTasks = itemsFiltered.map(item => item.children[1].innerHTML);
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>To Do List</h1>

            <section>
                <h2>List</h2>
                <ToDoList>
                    {tasks.map(task => <ToDoItem key={task.id} id={task.id} title={task.title} isChecked={task.isChecked} isCompleted={task.isCompleted} handleDelete={handleDelete}/>)}
                </ToDoList>
            </section>
                    
            <button onClick={() => deleteSelection()}>Delete Selected</button>

            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="title" id="title" value={form.title} onChange={(e) => handleChange(e)}/>
                    <button type='submit'>Add</button>
                </form>
            </section>
        </div>
    )
};

export { ToDo };