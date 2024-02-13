/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar constantemente",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  return <div className="App">
    <h1> ★ To Do List ★ </h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
    <TodoForm />
  </div>;
}

export default App;
