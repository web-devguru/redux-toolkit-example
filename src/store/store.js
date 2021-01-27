// import { createStore } from 'redux';
// import reducer from "./rootReducer";
//
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from './rootReducer';

export default configureStore({ reducer });
