import React, { useContext } from 'react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from '@aws-amplify/ui-react';
import Sidenav from '../layout/Sidenav';
import { UserContext } from '../../context/user/UserState';

function Auth() {
  const [authState, setAuthState] = React.useState();
  const [authUser, setAuthUser] = React.useState();
  const userContext = useContext(UserContext);
  const { getAuthUser, user } = userContext;

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setAuthUser(authData);
    });
  }, []);
  React.useEffect(() => {
    if (authUser) {
      getAuthUser(authUser);
    }
    // eslint-disable-next-line
  }, [authUser]);
  return authState === AuthState.SignedIn && authUser && user ? (
    <Sidenav />
  ) : (
    <div>
      <AmplifyAuthenticator>
        <AmplifySignIn
          formFields={[
            {
              type: 'username',
              label: 'Username *',
              placeholder: 'Name',
              hint: 'Username must be unique',
            },
            {
              type: 'password',
              label: 'Password *',
              placeholder: 'Enter your password',
              hint: 'Password must contain minimum of 8 characters',
            },
          ]}
          slot="sign-in"
        ></AmplifySignIn>
        <AmplifySignUp
          formFields={[
            {
              type: 'username',
              label: 'Username *',
              placeholder: 'Name',
              hint: 'Username must be unique',
            },
            {
              type: 'password',
              label: 'Password *',
              placeholder: 'Enter your password',
              hint: 'Password must contain minimum of 8 characters',
            },
            {
              type: 'email',

              label: 'Email *',
              placeholder: 'Email address',
            },
          ]}
          slot="sign-up"
        ></AmplifySignUp>
      </AmplifyAuthenticator>
    </div>
  );
}

export default Auth;
