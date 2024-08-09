import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './TodoList.css'

const TodoList = ({ todos, toggleTodo }) => (
  <ol className="todo-list">
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    ))}
  </ol>
);


export default TodoList;