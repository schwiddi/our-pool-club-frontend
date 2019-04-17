import { INIT_APP } from '../actions/actionTypes';

const ui = (state = {}, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ui;
