import React from 'react'

const ToDoForm = ({handleSubmit, title, handleChange}) => {
    return (
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="title" id="title" value={title} onChange={(e) => handleChange(e)}/>
                <button type='submit'>Add</button>
            </form>
        </section>
    )
};

export { ToDoForm };