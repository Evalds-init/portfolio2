import React, { createContext, useReducer } from 'react';
import friendReducer from './friendReducer';
import { API, graphqlOperation } from 'aws-amplify';
import {
  createFriend,
  updateFriend,
  createChannel,
} from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';
import { FRIEND_ERROR } from '../types';

export const FriendContext = createContext();
const { Provider } = FriendContext;

const FriendState = ({ children }) => {
  const initialState = {
    loadingFriend: true,
    friend: null,
    loadingProfile: true,
    friendError: null,
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(friendReducer, initialState);

  const addFriend = async (friendData, userData) => {
    const data = {};
    try {
      const channel = await API.graphql(
        graphqlOperation(createChannel, { input: data })
      );
      friendData.friendChannelId = channel.data.createChannel.id;
      userData.friendChannelId = channel.data.createChannel.id;
      const friend = await API.graphql(
        graphqlOperation(createFriend, { input: friendData })
      );
      const user = await API.graphql(
        graphqlOperation(createFriend, { input: userData })
      );
      console.log(friend, user);
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

  return (
    <Provider
      value={{
        loadingFriend: state.loadingFriend,
        loadingProfile: state.loadingProfile,
        friendError: state.friendError,
        friend: state.friendm,
        addFriend,
        acceptFriend,
        rejectFriendRequest,
      }}
    >
      {children}
    </Provider>
  );
};

export default FriendState;
