import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faGithub,
  faFacebookF
 } from '@fortawesome/free-brands-svg-icons'

import Layout from './Components/hoc/Layout/Layout';

import './App.css';

library.add(
  faGithub,
  faFacebookF
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
