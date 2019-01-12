import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import { BaseLayout } from 'app/core/layout/BaseLayout';

class App extends React.Component {
  render() {
    // const router = new RouterStore();

    // const stores = {
    //   router,
    // };

    const browserHistory = createBrowserHistory({ basename: '/' });
    // const history = syncHistoryWithStore(browserHistory, router);

    return (
      // <Provider {...stores}>
      <Router history={browserHistory}>
        <BaseLayout />
      </Router>
      // </Provider>
    );
  }
}

export { App };
