import React from 'react';
import ReactDOM from 'react-dom';
import './Reports.css';
import App from './App';
import configureStore from './configureStore'
import Root from './components/Root'
const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
