import {
  GET_CHANNELS,
  CHANNEL_ERROR,
  GET_CHANNEL,
  PUSH_TO_CHANNEL,
  CLEAR_CHANNEL,
  CREATE_CHANNEL,
  GET_PROFILE,
  CLEAR_PROFILE,
  GET_FRIEND_CHANNEL,
  PUSH_TO_FRIEND_CHANNEL,
  CLEAR_FRIEND_CHANNEL,
} from '../types';

export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_CHANNELS:
      return { ...state, channels: payload };
    case CHANNEL_ERROR:
      return { ...state, channelError: payload };
    case GET_CHANNEL:
      return {
        ...state,
        channel: payload,
      };
    case GET_FRIEND_CHANNEL:
      return {
        ...state,
        friendChannel: payload,
        loadingFriendChannel: false,
      };
    case PUSH_TO_CHANNEL:
      return {
        ...state,
        channel: {
          ...state.channel,
          messages: {
            ...state.channel.messages,
            items: [...state.channel.messages.items, payload],
          },
        },
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
    case CLEAR_CHANNEL:
      return { ...state, channel: null };
    case CLEAR_FRIEND_CHANNEL:
      return { ...state, friendChannel: null, loadingFriendChannel: true };
    case CREATE_CHANNEL:
      return { ...state, channels: [...state.channels, payload] };
    case GET_PROFILE:
      return { ...state, profile: payload, loadingProfile: false };
    case CLEAR_PROFILE:
      return { ...state, loadingProfile: true, profile: null };
    default:
      return state;
  }
};
