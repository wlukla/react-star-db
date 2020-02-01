import React from 'react';
import ReactDom from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import SwapiSevice from './services/swapi-service';

import App from './components/app';

const swapi = new SwapiSevice();

swapi.getAllPlanets().then((people) => {
  console.log(people);
});

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
