import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Resume from '../../Containers/Resume/Resume';
import Home from '../../Containers/Home/Home';

const Router = () => {
  return (
    <Switch>
      <Route path='/resume' component={Resume} />
      <Route path='/' component={Home} />
    </Switch>
  );
};

export default Router;