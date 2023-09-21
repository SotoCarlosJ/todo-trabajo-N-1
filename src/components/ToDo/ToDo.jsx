import React, { useState } from 'react';
import { ToDoTitle } from '../ToDoTitle/ToDoTitle';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoForm } from '../ToDoForm/ToDoForm';
import { ToDoButtons } from '../ToDoButtons/ToDoButtons';

const INITIAL_FORM_STATE = {
    id: null,
    title: "",
    isChecked: false,
    isCompleted: false
};

const ToDo = () => {
    // Estados
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    
    // Funcion para manejar la entrada de valores del input 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    // Funcion para controlar el botton de submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Comprobando si la nueva tarea ya esta incluida en la lista de tareas (igualando ambos string a lower case y eliminando todos los espacios)
        const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") == form.title.toLowerCase().replace(/ /g, ""));
        // Si la nueva tarea esta repetida enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con la nueva tarea
        hasTask ? alert("Esta repetida") : setTasks([...tasks, {...form, id: window.crypto.randomUUID()}]);
        setForm(INITIAL_FORM_STATE)
    };
    
    // Funcion para eliminar una tarea
    const handleDelete = (param) => {
        const itemIndex = tasks.findIndex(task => task.id == param);
        const newTasks = [...tasks];
        newTasks.splice(itemIndex, 1);
        setTasks(newTasks);
    };
    
    // Funcion para editar una tarea
    const handleEdit = (param) => {
        // Ingresando el nuevo titulo por medio de un prompt (investigar como cambiar desde el li)
        let newTitle = prompt('Edita la tarea desde aca');
        // Eliminando el error que muestra la consola si se cancela el prompt -> consular sobre esto en clases
        if(newTitle) {
            // Comprobando si el nuevo titulo de la tarea esta repetido
            const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") == newTitle.toLowerCase().replace(/ /g, ""));
            // Si el nuevo titulo de la tarea esta repetido enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con el nuevo titulo
            if(!hasTask) {
                const taskID = tasks.findIndex(task => task.title == param);
                const newTasks = [...tasks];
                newTasks[taskID].title = newTitle;
                setTasks(newTasks);
            } else alert('tarea repetida');
        };
    };

    // Funcion para manejar el cambio del checkbox
    const handleCheckbox = (param) => {
        const taskID = tasks.findIndex(task => task.id == param);
        const newTasks = [...tasks];
        newTasks[taskID].isChecked ? newTasks[taskID].isChecked = false : newTasks[taskID].isChecked = true;
        setTasks(newTasks);
    };

    // Funcion para eliminar un grupo de tareas seleccionadas
    const deleteSelection = () => {
        // Filtrando tareas que tengan el checkbox desactivado
        const remainingTasks = tasks.filter(task => task.isChecked == false);
        setTasks(remainingTasks);
    };

    // Funcion para actualizar a completada un grupo de tareas
    const completeSelection = () => {
        const newTasks = [...tasks];
        // Filtro tareas seleccionadas
        const tasksSelected = tasks.filter(task => task.isChecked === true);
        // Hago un map para conseguir el id de cada tarea seleccionada
        const tasksID = tasksSelected.map(task => newTasks.indexOf(task));
        // Cambio a "true" la propiedad isCompleted de las tareas seleccionadas en la copia de la lista de tareas
        tasksID.forEach(id => newTasks[id].isCompleted = true);
        setTasks(newTasks);
    };

    return (
        <div>
            <ToDoTitle />
            <ToDoList>
                {tasks.map(task => <ToDoItem key={task.id} id={task.id} title={task.title} isChecked={task.isChecked} isCompleted={task.isCompleted} handleDelete={handleDelete} handleEdit={handleEdit} handleCheckbox={handleCheckbox}/>)}
            </ToDoList>
            <ToDoForm handleSubmit={handleSubmit} title={form.title} handleChange={handleChange}/>
            <ToDoButtons deleteSelection={deleteSelection} completeSelection={completeSelection}/>
        </div>
    )
};

export { ToDo };