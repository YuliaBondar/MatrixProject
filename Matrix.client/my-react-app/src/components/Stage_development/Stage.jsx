import React from 'react';
import './Stage.css';
import stage_elem from './stage_elements.js';
import { FaArrowRightLong } from "react-icons/fa6";

const Stage = () => {
  return (
    <div className='stage_blocks_element'>
      <h1>Этапы разработки</h1>
      <div className="stages">
        {stage_elem.map((element, index) => (
          <React.Fragment key={element.id}>
            <div className="stages1">
              <p><b>{element.name}</b></p>
            </div>
            {index < stage_elem.length - 1 && (
              <FaArrowRightLong className="arrow-icon" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stage;
