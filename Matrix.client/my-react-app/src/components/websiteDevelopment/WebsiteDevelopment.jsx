import React from 'react'
import './WebsiteDevelopent.css'
import elements_site from './elements.js'

const WebsiteDevelopment = () => {
  return (
    <div className='website_development_block' id='services'>
        <div className="development_block">
            <div className="text_content">
                <h1>Разрабатываем сайты всех типов<br/></h1>
                <p>При работе над сайтом мы анализируем поведение каждого посетителя сайта, чтобы повысить его конверсию. Дополнительно мы сделаем анализ конкурентов, что позволит нам спроектировать идеальную структуру вашего будущего сайта.</p>
            </div>
            <div className="sites_block_content">
            {elements_site.map(element => (
                    <div key={element.id} className="block_element1">
                        <div className="block_element">
                          <img src={element.photo_element} alt='images about site'/>
                          <p className='name_element'><b>{element.name_element}</b></p>
                          <p>{element.text}</p>
                        </div>
                      </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default WebsiteDevelopment