import { SET_INFO_ADRESS, SET_USER_INFOS } from '../actions/actionTypes';

const INITIAL_STATE = { adressInfo:
  { sellerId: '', deliveryAddress: '', deliveryNumber: 0 } };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_INFOS:
    return { ...action.payload, ...state };
  case SET_INFO_ADRESS:
    return { ...state,
      adressInfo: { ...state.adressInfo, ...action.payload } };
  default:
    return state;
  }
};

export default userReducer;
