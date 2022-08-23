import { DISABLE_BUTTON, SET_USER_INFOS } from './actionTypes';

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
