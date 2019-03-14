import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Jumbotron from '../../Components/UI/Jumbotron/Jumbotron';
import Logo from '../../Components/UI/Logo/Logo';

import './Home.css';
import '../Page.css';

class Home extends Component {
  state = {
    iconLinks: [
      'https://github.com/green-sands-apps',
      'https://www.facebook.com/GreenSandsApps',
    ],
    icons: [
      ['fab', 'github'],
      [ 'fab', 'facebook-f'],
    ]
  }

  render() {
    const icons = this.state.icons.map((icon, index) => {
        console.log(icon);
        return(
          <div 
            onClick={() => {window.location.href = this.state.iconLinks[index]}}
            className='IconWrapper'
          >
            <FontAwesomeIcon icon={icon} size='lg'/>
          </div>
        )
      })

    return (
      <div className='Page'>
        <div>
        <div className='MainLogo MobileOnly'>
            <Logo text/>
          </div>
          <Jumbotron>
            <div style={{display: 'flex'}}>
              <div className='DesktopOnly MainLogo'>
                <Logo text/>
              </div>
              <div style={{marginLeft: '30px'}}>
                <h1>Code you can depend on. A developer you can trust.</h1>
                <p>
                  Using current best practices, developing test coverage, and deploying with continuous integration gets you the best code into your app quickly.
                </p>
              </div>
            </div>
            <div style={{width: '100%'}}>
                <div className='IconLinks'>
                  {icons}
                </div>
              </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;