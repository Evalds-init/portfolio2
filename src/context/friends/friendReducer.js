import {
  FRIEND_ERROR,
  GET_FRIENDS,
  SUBSCRIBE_TO_FRIEND_CHANGES,
  GET_FRIEND_CHANNEL,
  PUSH_TO_FRIEND_CHANNEL,
  CLEAR_FRIEND_CHANNEL,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case FRIEND_ERROR:
      return { ...state, friendError: payload, loadingFriend: false };
    case GET_FRIENDS:
      return { ...state, friends: payload };
    case SUBSCRIBE_TO_FRIEND_CHANGES:
      return {
        ...state,
        friends:
          payload.request === 'invitationRejected' ||
          payload.request === 'requestRejected'
            ? state.friends.filter((friend) => friend.name !== payload.name)
            : payload.request === 'sent' || payload.request === 'pending'
            ? [...state.friends, payload]
            : [...state.friends],
      };
    case GET_FRIEND_CHANNEL:
      return {
        ...state,
        friendChannel: payload,
        loadingFriendChannel: false,
      };
    case PUSH_TO_FRIEND_CHANNEL:
      return {
        ...state,
        friendChannel: {
          ...state.friendChannel,
          messages: {
            ...state.friendChannel.messages,
            items: [...state.friendChannel.messages.items, payload],
          },
        },
      };
    case CLEAR_FRIEND_CHANNEL:
      return { ...state, friendChannel: null, loadingFriendChannel: true };
    default:
      return state;
  }
};
