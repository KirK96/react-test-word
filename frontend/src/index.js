import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './core/App';
import theme from './core/backend/theme.json';

import './index.css';

ReactDOM.render(
  <Router>
    <App theme={theme} />
  </Router>
  , document.getElementById('root'));
