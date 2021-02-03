import React from 'react';
import UserState from './context/user/UserState';
import ChannelState from './context/channels/ChannelState';
import AlertState from './context/alert/AlertState';
import FriendState from './context/friends/FriendState';
import Auth from './components/auth/Auth';

function App() {
  return (
    <>
      <AlertState>
        <FriendState>
          <ChannelState>
            <UserState>
              <Auth />
            </UserState>
          </ChannelState>
        </FriendState>
      </AlertState>
    </>
  );
}
export default App;
