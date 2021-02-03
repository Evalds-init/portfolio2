import {
  GET_AUTH_USER,
  USER_ERROR,
  USER_SUBSCRIPTION,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_AUTH_USER:
      return { ...state, user: payload, loading: false };
    case USER_ERROR:
      return { ...state, error: payload };
    case USER_SUBSCRIPTION:
      return { ...state, user: payload, check: !state.check };
    default:
      return state;
  }
};
