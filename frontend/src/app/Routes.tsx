import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TestPage from 'src/app/tests/TestPage';
import MainPage from 'src/app/main/MainPage';
import { inject, observer } from '../../node_modules/mobx-react';

export const Routes: React.SFC = inject('router')(observer((props) => (
  <Switch location={props.router.location}>
    <Redirect exact from='/' to='/theme' />
    <Route exact path='/theme' component={MainPage} />
    <Route exact path='/theme/:id' component={TestPage} />
    <Route exact path='/test' component={TestPage} />
  </Switch>
)));
