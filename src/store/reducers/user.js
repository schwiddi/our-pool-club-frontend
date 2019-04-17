import { INITIATE_USER, INITIATE_USER_DONE } from '../actions/actionTypes';

const initialState = {
  initiating: false,
  initiated: false,
  initiated_at: '',
};

let now = '';

const user = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_USER:
      return {
        ...state,
        initiating: true,
      };
    case INITIATE_USER_DONE:
      now = new Date();
      return {
        ...state,
        initiating: false,
        initiated: true,
        initiated_at: now,
      };
    default:
      return state;
  }
};

export default user;
