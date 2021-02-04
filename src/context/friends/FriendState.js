import React, { createContext, useReducer } from 'react';
import friendReducer from './friendReducer';
import { API, graphqlOperation } from 'aws-amplify';
import {
  createFriend,
  updateFriend,
  createChannel,
  createMessage,
} from '../../graphql/mutations';
import { searchUsers, getChannel } from '../../graphql/queries';
import {
  FRIEND_ERROR,
  GET_FRIENDS,
  SUBSCRIBE_TO_FRIEND_CHANGES,
  GET_FRIEND_CHANNEL,
  PUSH_TO_FRIEND_CHANNEL,
  CLEAR_FRIEND_CHANNEL,
} from '../types';

export const FriendContext = createContext();
const { Provider } = FriendContext;

const FriendState = ({ children }) => {
  const initialState = {
    loadingFriend: true,
    friend: null,
    friends: null,
    friendError: null,
    friendChannel: null,
    loadingFriendChannel: true,
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(friendReducer, initialState);
  ////////////////////////////////////////////////////////////////////////////////////
  ///// FRIEND INTERACTION AND SUBSCRIPTION
  ///////////////////////////////////////////////////////////////////////////////////
  const addFriend = async (friendData, userData) => {
    const data = {};
    try {
      const channel = await API.graphql(
        graphqlOperation(createChannel, { input: data })
      );
      friendData.friendChannelId = channel.data.createChannel.id;
      userData.friendChannelId = channel.data.createChannel.id;
      await API.graphql(graphqlOperation(createFriend, { input: friendData }));
      await API.graphql(graphqlOperation(createFriend, { input: userData }));
    } catch (err) {
      console.log(err);
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };
  const acceptFriend = async (friend, user) => {
    let userAcc = {
      id: `${user}${friend}`,
      request: 'invitationAccepted',
    };
    let friendAcc = {
      id: `${friend}${user}`,
      request: 'requestAccepted',
    };
    try {
      const result = await API.graphql(
        graphqlOperation(updateFriend, { input: userAcc })
      );
      const requestUpdate = await API.graphql(
        graphqlOperation(updateFriend, { input: friendAcc })
      );
      console.log(result, requestUpdate);
    } catch (err) {
      console.log(err);
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };
  const fetchFriends = async (data) => {
    const friends = data.reduce(function (result, friend) {
      friend.request !== 'requestRejected' &&
        friend.request !== 'invitationRejected' &&
        result.push({ name: { eq: friend.name } });
      return result;
    }, []);
    console.log(friends);
    const input = {
      or: friends,
    };
    try {
      const result = await API.graphql(
        graphqlOperation(searchUsers, { filter: input })
      );
      dispatch({
        type: GET_FRIENDS,
        payload: result.data.searchUsers.items,
      });
    } catch (err) {
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };
  const rejectFriendRequest = async (friend, user) => {
    let userAcc = {
      id: `${user}${friend}`,
      request: 'invitationRejected',
    };
    let friendAcc = {
      id: `${friend}${user}`,
      request: 'requestRejected',
    };
    try {
      const result = await API.graphql(
        graphqlOperation(updateFriend, { input: userAcc })
      );
      const requestUpdate = await API.graphql(
        graphqlOperation(updateFriend, { input: friendAcc })
      );
      console.log(result, requestUpdate);
    } catch (err) {
      console.log(err);
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };
  const addFriendSubsciption = (friend) => {
    dispatch({
      type: SUBSCRIBE_TO_FRIEND_CHANGES,
      payload: friend,
    });
  };

  ////////////////////////////////////////////////////////////////////////////////////
  ///// FRIEND CHAT
  ///////////////////////////////////////////////////////////////////////////////////
  const getFriendChannel = async (id) => {
    try {
      const input = { id: id };
      const result = await API.graphql(graphqlOperation(getChannel, input));

      dispatch({
        type: GET_FRIEND_CHANNEL,
        payload: result.data.getChannel,
      });
    } catch (err) {
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };
  const pushToFriendChannel = (message) => {
    dispatch({
      type: PUSH_TO_FRIEND_CHANNEL,
      payload: message,
    });
  };

  const clearFriendChannel = () => {
    dispatch({
      type: CLEAR_FRIEND_CHANNEL,
    });
  };
  const postFriendMessage = async (input) => {
    try {
      await API.graphql(graphqlOperation(createMessage, { input }));
    } catch (err) {
      dispatch({
        type: FRIEND_ERROR,
        payload: err.message,
      });
    }
  };

  return (
    <Provider
      value={{
        loadingFriend: state.loadingFriend,
        friendError: state.friendError,
        friend: state.friend,
        friends: state.friends,
        friendChannel: state.friendChannel,
        loadingFriendChannel: state.loadingFriendChannel,
        addFriend,
        acceptFriend,
        fetchFriends,
        rejectFriendRequest,
        addFriendSubsciption,
        getFriendChannel,
        pushToFriendChannel,
        clearFriendChannel,
        postFriendMessage,
      }}
    >
      {children}
    </Provider>
  );
};

export default FriendState;
