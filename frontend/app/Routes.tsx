import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TestPage from 'app/tests/TestPage';
import MainPage from 'app/main/MainPage';

export const Routes: React.SFC = (_props) => (
  <Switch>
    <Redirect exact from="/" to="/theme" />
    <Route exact path="/theme" component={MainPage} />
    <Route exact path="/theme/:id" component={TestPage} />
    <Route exact path="/test" component={TestPage} />
  </Switch>
);
