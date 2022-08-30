import { DISABLE_BUTTON, EDIT_SHOP_CART, RM_SHOP_CART, SET_SHOP_CART, SET_USER_INFOS } from './actionTypes';

export const saveUser = (user) => (
  {
    type: SET_USER_INFOS,
    payload: user,
  }
);

export const disableButton = () => (
  {
    type: DISABLE_BUTTON,
  }
);

export const addToShopCart = (payload) => (
  {
    type: SET_SHOP_CART,
    payload
  }
);

export const editShopCart = (payload) => (
  {
    type: EDIT_SHOP_CART,
    payload
  }
);

export const rmShopCart = () => (
  {
    type: RM_SHOP_CART,
  }
);

