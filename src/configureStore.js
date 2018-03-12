import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const configureStore = () => {

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  //save state anytime storestate changes
  store.subscribe(() => {
    saveState({
      doctors: store.getState().doctors
    });
  });

  return store;
}

export default configureStore;
