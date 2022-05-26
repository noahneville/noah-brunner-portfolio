import React from 'react';

export default function Navigation({ currentPage, pageChange}) {
  return (
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="#AboutMe">Noah Brunner</a>
        <ul className='navbar justify-content-center'>
          <li className='nav-item'>
            <a href='#AboutMe' onClick={() => pageChange('AboutMe')} 
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                About Me
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Portfolio' onClick={() => pageChange('Portfolio')} 
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
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
      </div>
    </nav>
  );
};

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// export default function CenteredTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }
