import React from 'react';
import './ToDoForm.css';

const ToDoForm = ({handleSubmit, title, handleChange}) => {
    return (
        <section>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input className="form__input" placeholder="Agrega una nueva tarea..." autoComplete="off" type="text" name="title" id="title" value={title} onChange={(e) => handleChange(e)}/>
                <button className="form__btn" type="submit">+</button>
            </form>
        </section>
    )
};

export { ToDoForm };