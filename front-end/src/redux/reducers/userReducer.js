import { SET_USER_INFOS } from '../actions/actionTypes';

const INITIAL_STATE = { email: '' };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_INFOS:
    return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

export default userReducer;
