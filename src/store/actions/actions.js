import {
  INITIATE_APP,
  INITIATE_APP_DONE,
  INITIATE_USER,
  INITIATE_USER_DONE,
} from
  './actionTypes';

// actions (sync)
export const initiateApp = () => ({
  type: INITIATE_APP,
});

export const initiateAppDone = () => ({
  type: INITIATE_APP_DONE,
});

export const initiateUser = () => ({
  type: INITIATE_USER,
});

export const initiateUserDone = () => ({
  type: INITIATE_USER_DONE,
});


//  action creators (async)

// export const fetchAllNodes = () =>
//   function fetchNodes(dispatch) {
//     const urlString = 'discovery/nodes';
//     dispatch(requestAllNodes());
//     return api
//       .get(urlString)
//       .then(json => dispatch(receiveAllNodes(json)));
//     // .catch(error => errorHandler(error, dispatch));
//   };
