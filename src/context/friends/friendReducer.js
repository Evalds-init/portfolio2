import { FRIEND_ERROR } from '../types';

export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case FRIEND_ERROR:
      return { ...state, friendError: payload, loadingFriend: false };
    default:
      return state;
  }
};
