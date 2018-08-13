import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import { BaseLayout } from 'src/app/core/layout/BaseLayout';

class App extends React.Component {
  render() {
    const router = new RouterStore();

    const stores = {
      router,
    };

    const browserHistory = createBrowserHistory({ basename: '/' });
    const history = syncHistoryWithStore(browserHistory, router);

    return (
      <Provider {...stores}>
        <Router history={history}>
          <BaseLayout />
        </Router>
      </Provider>
    );
  }
}

export { App };
