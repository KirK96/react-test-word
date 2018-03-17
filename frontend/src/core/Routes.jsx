import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import TestPage from '../tests/TestPage';
import TestStartPage from '../tests/TestStartPage';
import TestFourOptionsPage from '../tests/TestFourOptionsPage';
import TestInputPage from '../tests/TestInputPage';
import MainPage from '../main/MainPage';

function Routes(props) {
  return (
    <Switch>
      <Redirect exact from='/' to='/test-word/theme' />
      <Route exact path='/test-word/theme' render={() => <MainPage data={props.theme} />} />
      <Route exact path='/test-word/theme/:id' component={TestPage} />
      <Route exact path='/test-word/free-test' component={TestPage} />
      <Route exact path='/test-word/test' component={TestStartPage} />
      <Route exact path='/test-word/test/four' component={TestFourOptionsPage} />
      <Route exact path='/test-word/test/input' component={TestInputPage} />
    </Switch>
  );
}

export default Routes;
