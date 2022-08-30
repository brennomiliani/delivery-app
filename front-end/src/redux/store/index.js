import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsReducer';
import userReducer from '../reducers/userReducer';
import walletReducer from '../reducers/walletReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
    products: productsReducer,
  },
});

export default store;
