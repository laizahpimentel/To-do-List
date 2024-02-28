/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/filter'


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

  const [search,setSearch] = useState("");

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

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo 
    );
    setTodos(newTodos);

  }

  return <div className="App">
    <h1> ★ To Do List ★ </h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter/>
    <div className="todo-list">
      {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}
          />
      ))}
    </div>
    <TodoForm  addTodo={addTodo}/>
  </div>;
}

export default App;
