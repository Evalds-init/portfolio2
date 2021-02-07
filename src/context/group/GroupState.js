import React, { createContext, useReducer } from 'react';
import channelReducer from './groupReducer';
import { API, graphqlOperation } from 'aws-amplify';
import {
  createGroupMessage,
  createGroup,
  updateGroup,
  createUserGroup,
} from '../../graphql/mutations';
import {
  byGroupName,
  getUser,
  getGroup,
  listGroups,
  searchUsers,
} from '../../graphql/queries';
import {
  GET_GROUPS,
  GROUP_ERROR,
  GET_GROUP,
  JOIN_GROUP,
  CLEAR_GROUP,
  CREATE_GROUP,
  PUSH_TO_GROUP,
  GET_PROFILE,
  CLEAR_PROFILE,
  UPDATE_GROUP,
  GET_GROUP_MEMBERS,
  GET_OWNED_GROUPS,
} from '../types';

export const GroupContext = createContext();
const { Provider } = GroupContext;

const GroupState = ({ children }) => {
  // set up initial state
  const initialState = {
    groups: [],
    group: null,
    groupMembers: null,
    ownedGroups: [],
    groupError: null,
    profile: null,
    loadingProfile: true,
  };

  const [state, dispatch] = useReducer(channelReducer, initialState);
  ////////////////////////////////////////////////////////////////////////////////////
  ///// Group CRUD
  ///////////////////////////////////////////////////////////////////////////////////
  const getSingleGroup = async (id) => {
    try {
      const input = { id };
      const result = await API.graphql(graphqlOperation(getGroup, input));
      console.log(result);
      dispatch({
        type: GET_GROUP,
        payload: result.data.getGroup,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };

  const getGroupMembers = async (data) => {
    const members = data.map((member) => ({ id: { eq: member.memberID } }));
    const input = {
      or: members,
    };
    try {
      const result = await API.graphql(
        graphqlOperation(searchUsers, { filter: input })
      );
      dispatch({
        type: GET_GROUP_MEMBERS,
        payload: result.data.searchUsers.items,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };

  const getUserOwnedGroups = async (data) => {
    if (data.length > 0) {
      const groupIds = data.map((group) => ({ id: { eq: group.id } }));
      const input = {
        or: groupIds,
      };
      try {
        const result = await API.graphql(
          graphqlOperation(listGroups, { filter: input })
        );
        console.log(result);
        dispatch({
          type: GET_OWNED_GROUPS,
          payload: result.data.listGroups.items,
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: GROUP_ERROR,
          payload: err.message,
        });
      }
    }
  };
  const getUserGroups = async (data) => {
    if (data.length > 0) {
      const groupIds = data.map((group) => ({ id: { eq: group.groupID } }));
      const input = {
        or: groupIds,
      };
      console.log(input);
      try {
        const result = await API.graphql(
          graphqlOperation(listGroups, { filter: input })
        );
        console.log(result);
        dispatch({
          type: GET_GROUPS,
          payload: result.data.listGroups.items,
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: GROUP_ERROR,
          payload: err.message,
        });
      }
    }
  };
  const createNewGroup = async (input) => {
    try {
      const result = await API.graphql(
        graphqlOperation(createGroup, { input })
      );
      dispatch({
        type: CREATE_GROUP,
        payload: result.data.createGroup,
      });
    } catch (err) {
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };
  const updateSingleGroup = async (input) => {
    try {
      const result = await API.graphql(
        graphqlOperation(updateGroup, { input })
      );
      dispatch({
        type: UPDATE_GROUP,
        payload: result.data.updateGroup,
      });
    } catch (err) {
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };
  const joinGroup = async (input) => {
    try {
      const joinedGroup = await API.graphql(
        graphqlOperation(createUserGroup, { input })
      );
      if (joinedGroup) {
        const groupId = { id: input.groupID };
        const addedGroup = await API.graphql(
          graphqlOperation(getGroup, groupId)
        );
        console.log(addedGroup);
        dispatch({
          type: JOIN_GROUP,
          payload: addedGroup.data.getGroup,
        });
      }
    } catch (err) {
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };
  const clearGroup = () => {
    dispatch({
      type: CLEAR_GROUP,
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////
  ///// GROUP CHAT
  ///////////////////////////////////////////////////////////////////////////////////
  const postGroupMessage = async (input) => {
    try {
      await API.graphql(graphqlOperation(createGroupMessage, { input }));
    } catch (err) {
      console.log(err);
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };

  const pushToGroupChat = (message) => {
    dispatch({
      type: PUSH_TO_GROUP,
      payload: message,
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////
  ///// PROFILE
  ///////////////////////////////////////////////////////////////////////////////////

  const getSingleProfile = async (name) => {
    try {
      const input = { name: name };
      const result = await API.graphql(graphqlOperation(getUser, input));

      dispatch({
        type: GET_PROFILE,
        payload: result.data.getUser,
      });
    } catch (err) {
      dispatch({
        type: GROUP_ERROR,
        payload: err.message,
      });
    }
  };
  const clearProfile = () => {
    dispatch({
      type: CLEAR_PROFILE,
    });
  };

  return (
    <Provider
      value={{
        ////////////////////////////////////////////////////////////////////////////////////
        ///// GROUP CRUD
        ///////////////////////////////////////////////////////////////////////////////////
        groups: state.groups,
        ownedGroups: state.ownedGroups,
        groupMembers: state.groupMembers,
        group: state.group,
        groupError: state.groupError,
        clearGroup,
        createNewGroup,
        getSingleGroup,
        updateSingleGroup,
        joinGroup,
        getUserGroups,
        getGroupMembers,
        getUserOwnedGroups,
        ////////////////////////////////////////////////////////////////////////////////////
        ///// GROUP CHAT
        ///////////////////////////////////////////////////////////////////////////////////
        postGroupMessage,
        pushToGroupChat,
        ////////////////////////////////////////////////////////////////////////////////////
        ///// PROFILE
        ///////////////////////////////////////////////////////////////////////////////////
        profile: state.profile,
        loadingProfile: state.loadingProfile,
        getSingleProfile,
        clearProfile,
      }}
    >
      {children}
    </Provider>
  );
};

export default GroupState;
