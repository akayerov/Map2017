/*
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
*/
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchCouter } from './actions/counter-actions'
import rootReducer from './reducers'

console.log('Store start');

const loggerMiddleware = createLogger();

console.log('Store start2');
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  //  loggerMiddleware // neat middleware that logs actions
  )
)
console.log('Store start3');
export default store;
/*
store.dispatch(fetchCouter(1)).then(() =>
  console.log(store.getState())
)
*/
