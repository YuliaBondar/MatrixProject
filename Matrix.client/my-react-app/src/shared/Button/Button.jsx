
import React from 'react';
import './Button.css';

const Button = ({ text, id, onClick }) => (
  <button id={id} className="contact-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;