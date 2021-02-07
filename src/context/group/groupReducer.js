import {
  GET_GROUPS,
  GROUP_ERROR,
  GET_GROUP,
  PUSH_TO_GROUP,
  CLEAR_GROUP,
  CREATE_GROUP,
  GET_PROFILE,
  CLEAR_PROFILE,
  UPDATE_GROUP,
  GET_GROUP_MEMBERS,
  GET_OWNED_GROUPS,
  JOIN_GROUP,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////////////
    ///// Group CRUD
    ///////////////////////////////////////////////////////////////////////////////////
    case GET_GROUPS:
      return { ...state, groups: payload };
    case UPDATE_GROUP:
      return { ...state, group: payload };
    case GROUP_ERROR:
      return { ...state, groupError: payload };
    case GET_GROUP_MEMBERS:
      return { ...state, groupMembers: payload };
    case GET_GROUP:
      return {
        ...state,
        group: payload,
      };
    case JOIN_GROUP:
      return {
        ...state,
        groups: [...state.groups, payload],
      };
    case CLEAR_GROUP:
      return { ...state, group: null, groupMembers: null };
    case CREATE_GROUP:
      return { ...state, ownedGroups: [...state.ownedGroups, payload] };
    case GET_OWNED_GROUPS:
      return { ...state, ownedGroups: payload };

    ////////////////////////////////////////////////////////////////////////////////////
    ///// Group CHAT
    ///////////////////////////////////////////////////////////////////////////////////
    case PUSH_TO_GROUP:
      return {
        ...state,
        group: {
          ...state.group,
          groupMessages: {
            ...state.group.groupMessages,
            items: [...state.group.groupMessages.items, payload],
          },
        },
      };

    ////////////////////////////////////////////////////////////////////////////////////
    ///// PROFILE
    ///////////////////////////////////////////////////////////////////////////////////
    case GET_PROFILE:
      return { ...state, profile: payload, loadingProfile: false };
    case CLEAR_PROFILE:
      return { ...state, loadingProfile: true, profile: null };
    default:
      return state;
  }
};
