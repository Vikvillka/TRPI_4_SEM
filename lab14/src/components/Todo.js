import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css'

const Todo = ({ onClick, completed, text }) => (
  <li className='item'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);



export default Todo;