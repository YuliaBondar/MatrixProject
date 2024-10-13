import React from 'react';
import './PopupWindow.css';

const PopupWindow = ({ message, onClose }) => {
  return (
    <div className='popup-window'>
      <p>{message}</p>
      <button className='close-btn' onClick={onClose}>&times;</button>
    </div>
  );
};

export default PopupWindow;