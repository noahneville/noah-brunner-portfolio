import React from 'react';

export default function Navigation({ currentPage, pageChange}) {
  return (
    <ul className='navbar'>
      <li className='nav-item'>
        <a href='#AboutMe' onClick={() => pageChange('AboutMe')} 
        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About Me
        </a>
      </li>
      <li className='nav-item'>
        <a href='#Portfolio' onClick={() => pageChange('Portfolio')} 
        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            Portfolio
        </a>
      </li>
      <li className='nav-item'>
        <a href='#Resume' onClick={() => pageChange('Resume')} 
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
        </a>
      </li>
      <li className='nav-item'>
        <a href='#Contact' onClick={() => pageChange('Contact')} 
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
        </a>
      </li>
    </ul>
  );
};