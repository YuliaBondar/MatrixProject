import React, { useState } from 'react';
import './OurTextForm.css';
import element_for_form from './OurElement.js'; // Assume you renamed the file and moved to .json format

const OurTextForm = () => {
  const [expandedParagraph, setExpandedParagraph] = useState(null);

  const toggleParagraph = (index) => {
    setExpandedParagraph(expandedParagraph === index ? null : index);
  };

  return (
    <div className='OurText_form_block'>
      <div className="text_for_form">
        <h2>
          Ваша заявка – это первый шаг на пути к созданию уникального и успешного веб-присутствия.
          Она позволяет нам понять ваши потребности, идеи и цели, чтобы мы могли предложить наиболее
          эффективные решения для разработки и продвижения вашего сайта.
        </h2>
        <h3>Почему отправлять заявку важно?</h3>
        <div className='paragraph1'>
          {element_for_form.map((item, index) => (
            <div className="paragraph" key={index}>
              <h4 onClick={() => toggleParagraph(index)}>
                {item.title} 
                <span className={expandedParagraph === index ? 'icon rotated' : 'icon'}>&#x25BC;</span>
              </h4>
              <p className={expandedParagraph === index ? 'expanded' : 'collapsed'}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <h3>
          Отправьте заявку и дайте нам возможность показать, на что способен ваш бизнес в цифровом пространстве.
        </h3>
      </div>
    </div>
  );
};

export default OurTextForm;
