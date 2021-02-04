import React from 'react';
import UserState from './context/user/UserState';
import GroupState from './context/group/GroupState';
import AlertState from './context/alert/AlertState';
import FriendState from './context/friends/FriendState';
import Auth from './components/auth/Auth';

function App() {
  return (
    <>
      <AlertState>
        <FriendState>
          <GroupState>
            <UserState>
              <Auth />
            </UserState>
          </GroupState>
        </FriendState>
      </AlertState>
    </>
  );
}
export default App;
