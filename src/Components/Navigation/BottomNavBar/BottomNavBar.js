import React from 'react';

// import HambergerButton from '../../components/UI/hambergerButton/hambergerButton';

import './BottomNavBar.css';

const toolbar = (props) => (
  <footer className='BottomNavBar'>
      <div style={{alignItems: 'center', display: 'flex', margin: '0 14px'}}>
        &copy; 2019 Green Sands Apps
      </div>
  </footer>
);

export default toolbar;