import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css'; // Подключаем стили

function App() {
  const [todos, setTodos] = useState([]);

  // Функция для добавления новой задачи
  const addTodo = (task) => {
    setTodos([...todos, { task, id: Date.now() }]);
  };

  // Функция для удаления задачи
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
