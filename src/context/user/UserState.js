import React, { createContext, useReducer } from 'react';
import userReducer from './userReducer';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser, updateUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';
import { GET_AUTH_USER, USER_ERROR, UPDATE_USER } from '../types';

export const UserContext = createContext();
const { Provider } = UserContext;

const UserState = ({ children }) => {
  // set up initial state
  const initialState = {
    loading: true,
    error: null,
    user: null,
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(userReducer, initialState);

  const getAuthUser = async (data) => {
    const input = { name: data.username };
    try {
      const userExists = await API.graphql(graphqlOperation(getUser, input));
      if (userExists.data.getUser) {
        dispatch({
          type: GET_AUTH_USER,
          payload: userExists.data.getUser,
        });
      } else {
        const regData = {
          name: data.username,
          email: data.attributes.email,
          userId: data.attributes.sub,
        };
        const newUser = await API.graphql(
          graphqlOperation(createUser, { input: regData })
        );
        dispatch({
          type: GET_AUTH_USER,
          payload: newUser.data.createUser,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error.message,
      });
    }
  };
  const updateCurrentUser = async (data) => {
    const userData = { input: data };
    try {
      const user = await API.graphql(graphqlOperation(updateUser, userData));
      dispatch({
        type: UPDATE_USER,
        payload: user.data.updateUser,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error.message,
      });
    }
  };
  return (
    <Provider
      value={{
        loading: state.loading,
        user: state.user,
        error: state.error,
        getAuthUser,
        updateCurrentUser,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserState;
