import React from 'react';

import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
// import HambergerButton from '../../components/UI/hambergerButton/hambergerButton';

import './TopNavBar.css';

const toolbar = (props) => (
  <header className='TopNavBar'>
    <div className='Brand'>
      <Logo />
    </div>
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;