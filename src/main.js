console.log('react');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
require('es6-promise').polyfill();
// 07/02/2017 Material UI use
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('mount-point')
);
