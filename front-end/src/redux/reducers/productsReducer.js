import { SET_PRODUCTS } from '../actions/actionTypes';

const INITIAL_STATE = [];

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PRODUCTS:
    return action.payload;
  default:
    return state;
  }
};

export default productsReducer;
