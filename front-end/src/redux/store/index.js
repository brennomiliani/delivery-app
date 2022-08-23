// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from '../reducers';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(),
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
// import filtersReducer from '../features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
