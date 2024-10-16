import React from 'react';
import './Button.css';

const Button = ({ text, id, onClick, disabled }) => (
  <button id={id} className="contact-button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default Button;
