import React, {useState} from 'react'
import './Navigation.css'


const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navigation_block'>
      <div className="navigation_block_links">
        <div className="logo_company">
          <li><a href="#top" onClick={() => handleSetActive('top')} className={activeLink === 'top' ? 'active' : ''}>Visioner</a></li>
        </div>
        <div className="links_navigation">
          <nav>
            <li><a href="#work" onClick={() => handleSetActive('work')} className={activeLink === 'work' ? 'active' : ''}>Как мы работаем</a></li>
            <li><a href="#services" onClick={() => handleSetActive('services')} className={activeLink === 'services' ? 'active' : ''}>Услуги</a></li>
            <li><a href="#request" onClick={() => handleSetActive('request')} className={activeLink === 'request' ? 'active' : ''}>Оставить заявку</a></li>
            <li><a href="#contacts" onClick={() => handleSetActive('contacts')} className={activeLink === 'contacts' ? 'active' : ''}>Контакты</a></li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;