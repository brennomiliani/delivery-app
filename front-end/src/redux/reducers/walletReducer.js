import { addProductsToLocal, removeProductToLocal } from '../../services/localStorage';
import { EDIT_SHOP_CART, SET_SHOP_CART } from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [] };

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SHOP_CART:
    const newProd = {
      ...state,
      products: [...state.products, action.payload] };
    addProductsToLocal(newProd.products);
    return newProd;
    //   case RM_SHOP_CART:
    //     return (action.payload - action.state);
  case EDIT_SHOP_CART:
    const update = {
      ...state,
      products: state.products.map((product) => {
        if (product.id === action.payload.id) return action.payload;
        return product;
      }),
    };
    if (Number(action.payload.qtd) === 0) {
      removeProductToLocal(action.payload.id);
    } else {
      addProductsToLocal(update.products);
    }
    return update;
  default:
    return state;
  }
};

export default walletReducer;
