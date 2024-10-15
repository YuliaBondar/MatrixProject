import React from 'react';
import './Consultation.css';
import Button from '../Button/Button';

const Consultation = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(event.target.getAttribute('id'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='block_consultation'>
      <div className="block_link_for_form">
        <div className="text_block">
          <h1>Консультация по услугам</h1>
          <p>Менеджеры компании с радостью ответят на ваши вопросы, произведут расчет стоимости услуг и подготовят индивидуальное коммерческое предложение.</p>
        </div>
        <div className="button_link">
          <Button text='Задать вопрос' id='request' onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
