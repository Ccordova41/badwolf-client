import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './Reports.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState,saveState } from './localStorage'

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.subscribe(() => {
  saveState({
    doctors: store.getState().doctors
  });
});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
