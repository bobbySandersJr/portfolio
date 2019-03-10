import React, { Component } from 'react';

import TopNavBar from '../../Navigation/TopNavBar/TopNavBar';
import BottomNavBar from '../../Navigation/BottomNavBar/BottomNavBar';

class Layout extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        ROUTER
        <BottomNavBar />
      </div>
    );
  }
}

export default Layout;