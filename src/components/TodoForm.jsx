// eslint-disable-next-line no-unused-vars
import React from 'react';

const TodoForm = () => {
    return <div className='todo-form'>
        <h2> Criar tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite o título" /> 
            <select>
                <option value="">Selecione uma categoria </option>
                <option value="Trabalho">Trabalho </option>
                <option value="Pessoal"> Pessoal </option>
                <option value="Estudo">Estudo </option>
            </select>
            <button type="submit"> Criar Tarefa</button>
        </form>

    </div>;
};


export default TodoForm;
