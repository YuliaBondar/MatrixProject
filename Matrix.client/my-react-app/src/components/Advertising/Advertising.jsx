import React from 'react'
import './Advertising.css'
import prom_elem from './promotion_elem.js'

const Advertising = () => {
  return (
    <div className='advertising_Promotion'>
        <div className="advertising_Promotion_content">
            <div className="text_promotion">
                    <h1>Реклама и продвижение</h1>
                    <p>Практически по всем рекламным каналам мы можем дать конкретные минимальные гарантии по количеству привлеченных клиентов и закрепить их в договоре.</p>
                </div>
            <div className="advertising_Promotion_block">
                {prom_elem.map(element => (
                    <div key={element.id} className="prom_element1" title={element.title}>
                        <div className="prom_element">
                            <img src={element.photo_elem} alt='images about site'/>
                            <div className="text_prom">
                                <p className='name_element'><b>{element.name_elem}</b></p>
                                <p className='text_about_element'>{element.text}</p>
                            </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Advertising