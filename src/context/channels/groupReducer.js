import {
  GET_GROUPS,
  GROUP_ERROR,
  GET_GROUP,
  PUSH_TO_GROUP,
  CLEAR_GROUP,
  CREATE_GROUP,
  GET_PROFILE,
  CLEAR_PROFILE,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_GROUPS:
      return { ...state, groups: payload };
    case GROUP_ERROR:
      return { ...state, channelError: payload };
    case GET_GROUP:
      return {
        ...state,
        group: payload,
      };

    case PUSH_TO_GROUP:
      return {
        ...state,
        group: {
          ...state.group,
          messages: {
            ...state.group.messages,
            items: [...state.group.messages.items, payload],
          },
        },
      };

    case CLEAR_GROUP:
      return { ...state, group: null };
    case CREATE_GROUP:
      return { ...state, groups: [...state.groups, payload] };
    case GET_PROFILE:
      return { ...state, profile: payload, loadingProfile: false };
    case CLEAR_PROFILE:
      return { ...state, loadingProfile: true, profile: null };
    default:
      return state;
  }
};
