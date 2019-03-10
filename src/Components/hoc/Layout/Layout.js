import React, { Component } from 'react';

import TopNavBar from '../../Navigation/TopNavBar/TopNavBar';
import BottomNavBar from '../../Navigation/BottomNavBar/BottomNavBar';
import Router from '../../Router/Router';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
          <div className='Content'>
            <Router />
          </div>
        <BottomNavBar />
      </div>
    );
  }
}

export default Layout;