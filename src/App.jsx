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

  //criar tarefa 
  const addTodo = (text, category) => {

    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() *10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
  };

  // deletar tarefa
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
  }



  return <div className="App">
    <h1> ★ To Do List ★ </h1>
    <div className="todo-list">
      {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
      ))}
    </div>
    <TodoForm  addTodo={addTodo}/>
  </div>;
}

export default App;
