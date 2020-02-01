import React from 'react';
import ReactDom from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';

import App from './components/app';

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
