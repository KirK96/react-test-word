import 'src/assets/styles/index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/app/App';

const root = document.createElement('div');

root.setAttribute('id', 'root');
document.body.insertBefore(root, document.body.children[0]);

ReactDOM.render(<App />, root);
