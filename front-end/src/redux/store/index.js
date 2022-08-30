import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import walletReducer from '../reducers/walletReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
  },
});

export default store;
