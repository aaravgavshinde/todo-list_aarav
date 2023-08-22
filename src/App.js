import ToDo from "./Components/ToDo";
import "./App.css";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";

function App() {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);

  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const openPopup = () => {
    let a = document.getElementById('formbox')
    a.classList.add('open')
  }

  const closePopup = () => {
    let b = document.getElementById('formbox')
    b.classList.remove('open')
  }

  return (
    <div id="container" className="container">
      <div id="app-wrapper" className="app-wrapper">
        <div>
          <ToDo />
        </div>
        <div>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} openPopup={openPopup} closePopup={closePopup}/>
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} openPopup={openPopup} closePopup={closePopup}/>
        </div>
      </div>
    </div>
  );
}

export default App;
