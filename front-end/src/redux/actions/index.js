import { DISABLE_BUTTON, RM_SHOP_CART, SET_SHOP_CART, SET_USER_INFOS } from './actionTypes';

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

export const saveShopCart = () => (
  {
    type: SET_SHOP_CART,
  }
);

export const rmShopCart = () => (
  {
    type: RM_SHOP_CART,
  }
);

