import { RM_SHOP_CART, SET_PRODUCTS } from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  removedItem: false,};


const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PRODUCTS:
    return { ...state, products: action.payload };
  case RM_SHOP_CART:
    return { ...state, removedItem: action.payload };;
  default:
    return state;
  }
};

export default productsReducer;
