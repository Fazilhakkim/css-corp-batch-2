import React from 'react';
import ReactDOM from 'react-dom';
import weatherServer from './server';
import Weather from './weather';

weatherServer();

ReactDOM.render(
  <Weather />,
  document.getElementById('root'),
);
