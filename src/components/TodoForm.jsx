/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// import React from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    //submit's form
    const handleSubmit = (e) => {
        e.preventDeFault();
        if (!value || !category) return;
        // add todo , clear of fields
        addTodo(value,category);
        setValue("");
        setCategory("");
        console.log("testando");

    };

    return (
        <div className='todo-form'>
        <h2> Criar tarefa:</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Digite o título" 
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category}  onChange={(e) => setCategory(e.target.value)} >
                <option value="">Selecione uma categoria </option>
                <option value="Trabalho">Trabalho </option>
                <option value="Pessoal"> Pessoal </option>
                <option value="Estudo">Estudo </option>
            </select>
            <button type="submit"> Criar Tarefa</button>
        </form>
    </div>
    )
    //  {/* <button type="submit" onClick={() => addTodo (todo.id)}> Criar Tarefa</button> */}
};


export default TodoForm;
