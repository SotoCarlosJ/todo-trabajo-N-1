import React from 'react';

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
    return (
        <div>
            <h1>To Do List</h1>

            <section>
                <h2>List</h2>
                <ul>
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
                        <input type="checkbox" name="" id=""/>
                        <li>Item 1</li>
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                </ul>
            </section>

            <section>
                <form>
                    <input type="text" name="" id=""/>
                    <button>Add</button>
                </form>
            </section>
        </div>
    )
};

export { ToDo };