import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer_block' id='request'>
        <div className="footer_block_elements">
            <div className="footer_text">
                <h3>Обсудить ваш проект</h3>
            </div>
            <div className="contact" >
              <h4><li><a href="#request">Оставить сообщение в Telegram</a></li></h4>
            </div>
        </div>
    </div>
  )
}

export default Footer