import { GET_AUTH_USER, USER_ERROR,UPDATE_USER } from '../types';

export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_AUTH_USER:
      return { ...state, user: payload, loading: false };
    case USER_ERROR:
      return { ...state, error: payload };
    case UPDATE_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
