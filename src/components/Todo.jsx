/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Todo = ({todo, removeTodo  }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className="complete">Completar</button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo
