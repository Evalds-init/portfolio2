import React, { createContext, useReducer } from 'react';
import channelReducer from './channelReducer';
import { API, graphqlOperation } from 'aws-amplify';
import {
  createMessage,
  createChannel,
  createGroup,
} from '../../graphql/mutations';
import {
  listChannels,
  getChannel,
  getUser,
  listGroups,
} from '../../graphql/queries';
import {
  GET_CHANNELS,
  CHANNEL_ERROR,
  GET_CHANNEL,
  PUSH_TO_CHANNEL,
  CLEAR_CHANNEL,
  CREATE_CHANNEL,
  GET_PROFILE,
  GET_FRIEND_CHANNEL,
  PUSH_TO_FRIEND_CHANNEL,
  CLEAR_PROFILE,
  CLEAR_FRIEND_CHANNEL,
} from '../types';

export const ChannelContext = createContext();
const { Provider } = ChannelContext;

const ChannelState = ({ children }) => {
  // set up initial state
  const initialState = {
    channels: [],
    channel: null,
    friendChannel: null,
    loadingFriendChannel: true,
    channelError: null,
    profile: null,
    loadingProfile: true,
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(channelReducer, initialState);

  const getChannels = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listGroups));
      dispatch({
        type: GET_CHANNELS,
        payload: result.data.listGroups.items,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CHANNEL_ERROR,
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
        type: CREATE_CHANNEL,
        payload: result.data.createGroup,
      });
    } catch (err) {
      dispatch({
        type: CHANNEL_ERROR,
        payload: err.message,
      });
    }
  };
  const postChannelMessage = async (input) => {
    try {
      const result = await API.graphql(
        graphqlOperation(createMessage, { input })
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: CHANNEL_ERROR,
        payload: err.message,
      });
    }
  };

  const pushToChannel = (message) => {
    dispatch({
      type: PUSH_TO_CHANNEL,
      payload: message,
    });
  };
  const clearChannel = () => {
    dispatch({
      type: CLEAR_CHANNEL,
    });
  };
  const pushToFriendChannel = (message) => {
    dispatch({
      type: PUSH_TO_FRIEND_CHANNEL,
      payload: message,
    });
  };

  const getSingleChannel = async (id) => {
    try {
      const input = { id: id };
      const result = await API.graphql(graphqlOperation(getChannel, input));
      console.log(result);
      dispatch({
        type: GET_CHANNEL,
        payload: result.data.getChannel,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CHANNEL_ERROR,
        payload: err.message,
      });
    }
  };
  const getFriendChannel = async (id) => {
    try {
      const input = { id: id };
      const result = await API.graphql(graphqlOperation(getChannel, input));
      console.log(result);
      dispatch({
        type: GET_FRIEND_CHANNEL,
        payload: result.data.getChannel,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CHANNEL_ERROR,
        payload: err.message,
      });
    }
  };
  const getSingleProfile = async (name) => {
    try {
      const input = { name: name };
      const result = await API.graphql(graphqlOperation(getUser, input));
      console.log(result);
      dispatch({
        type: GET_PROFILE,
        payload: result.data.getUser,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CHANNEL_ERROR,
        payload: err.message,
      });
    }
  };
  const clearProfile = () => {
    dispatch({
      type: CLEAR_PROFILE,
    });
  };
  const clearFriendChannel = () => {
    dispatch({
      type: CLEAR_FRIEND_CHANNEL,
    });
  };

  return (
    <Provider
      value={{
        channels: state.channels,
        channel: state.channel,
        profile: state.profile,
        loadingProfile: state.loadingProfile,
        friendChannel: state.friendChannel,
        channelError: state.channelError,
        loadingFriendChannel: state.loadingFriendChannel,
        getFriendChannel,
        getChannels,
        getSingleProfile,
        getSingleChannel,
        postChannelMessage,
        pushToChannel,
        clearProfile,
        clearChannel,
        createNewGroup,
        pushToFriendChannel,
        clearFriendChannel,
      }}
    >
      {children}
    </Provider>
  );
};

export default ChannelState;
