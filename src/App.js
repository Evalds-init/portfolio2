import React from 'react';
import UserState from './context/user/UserState';
import ChannelState from './context/channels/ChannelState';
import FriendState from './context/friends/FriendState';
import Auth from './components/auth/Auth';

function App() {
  return (
    <>
      <FriendState>
        <ChannelState>
          <UserState>
            <Auth />
          </UserState>
        </ChannelState>
      </FriendState>
    </>
  );
}
export default App;
