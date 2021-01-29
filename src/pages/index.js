import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './search/search';

const Pages = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SearchPage} />
      </Switch>
    </Router>
  )
}

export default Pages;