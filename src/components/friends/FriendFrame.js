import React, { useReducer } from 'react';
import FriendHeader from './FriendHeader';
import FriendList from './FriendList';
import SearchField from './SearchField';
function FriendFrame({ user }) {
  const [showSearch, setShowSearch] = useReducer(
    (showSearch) => !showSearch,
    false
  );
  return (
    <>
      <FriendHeader setShowSearch={setShowSearch} showSearch={showSearch} />
      {showSearch && <SearchField />}
      <FriendList user={user} />
    </>
  );
}

export default FriendFrame;
