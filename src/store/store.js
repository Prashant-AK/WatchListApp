import {createStore, applyMiddleWare} from 'redux';
// import thunk from 'redux-thunk';

import rootReducer from '../reducer';
// const middleware = [thunk];
// import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleWare(...middleware)),
);
export default store;
