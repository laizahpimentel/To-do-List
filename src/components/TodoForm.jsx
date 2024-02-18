/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    //submit's form
    const handleSubmit = (e) => {
        e.preventDeFault();
        console.log(value,category);
    };

    return (
        <div className='todo-form'>
        <h2> Criar tarefa:</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Digite o título" 
            onChange={(e) => setValue(e.target.value)}
            />
            <select onChange={(e) => setCategory(e.target.value)} >
                <option value="">Selecione uma categoria </option>
                <option value="Trabalho">Trabalho </option>
                <option value="Pessoal"> Pessoal </option>
                <option value="Estudo">Estudo </option>
            </select>
            <button type="submit"> Criar Tarefa</button>
        </form>
    </div>
    )
};


export default TodoForm;
