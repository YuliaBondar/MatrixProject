import React from 'react';
import './StagesOfWork.css';
import stage from './Stage.js';

const StagesOfWork = () => {
  return (
    <div className='stage_of_work'>
      <div className="develop_page">
        {stage.map((element, index) => (
          <div key={index} className={`page page-${index}`}>
            <h2>{element.name}</h2>
            <p>{element.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StagesOfWork;
