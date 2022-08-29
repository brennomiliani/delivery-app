import { SET_USER_INFOS } from '../actions/actionTypes';

const INITIAL_STATE = {};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_INFOS:
    return action.payload;
  default:
    return state;
  }
};

export default walletReducer;
