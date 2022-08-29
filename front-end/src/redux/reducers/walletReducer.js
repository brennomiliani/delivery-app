import { RM_SHOP_CART, SET_SHOP_CART } from '../actions/actionTypes';

const INITIAL_STATE = [];

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SHOP_CART:
      
    return ;
  case RM_SHOP_CART:
    return (action.payload - action.state);
  default:
    return state;
  }
};

export default walletReducer;
