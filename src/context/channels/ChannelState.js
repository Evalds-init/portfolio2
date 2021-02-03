import React, { createContext, useReducer } from 'react';
import channelReducer from './groupReducer';
import { API, graphqlOperation } from 'aws-amplify';
import { createGroupMessage, createGroup } from '../../graphql/mutations';
import { getGroup, getUser, listGroups } from '../../graphql/queries';
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

export const ChannelContext = createContext();
const { Provider } = ChannelContext;

const ChannelState = ({ children }) => {
  // set up initial state
  const initialState = {
    groups: [],
    group: null,
    channelError: null,
    profile: null,
    loadingProfile: true,
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(channelReducer, initialState);

  const getAllGroups = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listGroups));
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
  const clearGroup = () => {
    dispatch({
      type: CLEAR_GROUP,
    });
  };

  const getSingleGroup = async (id) => {
    try {
      const input = { id: id };
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
        groups: state.groups,
        group: state.group,
        profile: state.profile,
        loadingProfile: state.loadingProfile,
        channelError: state.channelError,
        getAllGroups,
        getSingleProfile,
        getSingleGroup,
        postGroupMessage,
        pushToGroupChat,
        clearProfile,
        clearGroup,
        createNewGroup,

      }}
    >
      {children}
    </Provider>
  );
};

export default ChannelState;
