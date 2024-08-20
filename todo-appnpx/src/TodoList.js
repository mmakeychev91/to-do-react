import React from 'react';

function TodoList({ todos, onRemoveTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
