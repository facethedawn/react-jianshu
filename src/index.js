import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import { GlobalStyle } from './style'
import { GlobalIconfont } from './static/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
    <GlobalIconfont />
  </Fragment>,
  document.getElementById('root')
);