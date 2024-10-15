import React from 'react'
import WebsiteDevelopment from '../../components/websiteDevelopment/WebsiteDevelopment';
import Stage from '../../components/Stage_development/Stage.jsx'
import Advertising from '../../components/Advertising/Advertising.jsx';
import StagesOfWork from '../../components/StagesOfWork/StagesOfWork.jsx';

const Services = () => {
  return (
    <div >
        <WebsiteDevelopment/>
        <Stage />
        <StagesOfWork/>
        <Advertising/>
       
    </div>
  )
}

export default Services