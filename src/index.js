import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import { GlobalStyle } from './style'

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root')
);