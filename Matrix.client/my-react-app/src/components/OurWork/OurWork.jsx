import React from 'react'
import './OurWork.css'
import Worker from '../../photo/photo.png'
// import Matrix from '../../photo/matrix.png'

const OurWork = () => {
  return (
    <div id='work'>
        <div className="our_work_block">
            <div className="block_with_photo">
                <img src={Worker} alt='worker with laptop' />
                <div className="overlay">
                    <h2>Как мы работаем?</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurWork