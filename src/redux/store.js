import { createStore, applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));


export default store;