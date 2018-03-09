import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TestPage from './tests/TestPage';
import MainPage from './main/MainPage';

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/test-word/theme' render={() => <MainPage data={props.theme} />} />
      <Route exact path='/test-word/theme/:id' component={TestPage} />
      <Route path='/test-word/test' component={TestPage} />
    </Switch>
  );
}

export default Routes;
