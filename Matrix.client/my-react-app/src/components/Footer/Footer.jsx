import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer_block' id='contacts'>
      <div className="footer_block_elements">
        <div className="footer_text">
          <h3>Обсудить ваш проект</h3>
        </div>
        <div className="contact">
          <h4><li><a href="#request">telegram: Оставить сообщение в Telegram</a></li></h4>
          <h4><li><a href="mailto:Visioner@group">email: Visioner@group</a></li></h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
