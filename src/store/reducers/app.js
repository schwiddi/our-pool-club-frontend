import { INITIATE_APP, INITIATE_APP_DONE } from '../actions/actionTypes';

const initialState = {
  initiating: false,
  initiated: false,
  initiated_at: '',
};

let now = '';

const ui = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_APP:
      return {
        ...state,
        initiating: true,
      };
    case INITIATE_APP_DONE:
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

export default ui;
