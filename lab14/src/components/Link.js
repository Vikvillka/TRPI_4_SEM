import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ active, children, onClick }) => (
  <button className='link'
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);


export default Link;