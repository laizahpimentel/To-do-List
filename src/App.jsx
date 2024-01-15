/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

import "./App.css";


function App() {

  const [todos,setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar constantemente",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  return <div className="App">
    <h1> ★ To Do List ★ </h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p>{todo.category}</p>({todo.category})
          </div>
          <div>
            <button>Completar</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App;
