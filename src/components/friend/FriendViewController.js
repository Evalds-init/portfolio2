import React, { useReducer, useContext } from 'react';
import FriendHeader from './FriendHeader';
import FriendList from './FriendList';
import SearchField from './SearchField';
import { FriendContext } from '../../context/friends/FriendState';
function FriendViewController() {
  const friendContext = useContext(FriendContext);
  const { friends } = friendContext;
  const [showSearch, setShowSearch] = useReducer(
    (showSearch) => !showSearch,
    false
  );
  return (
    <>
      <FriendHeader setShowSearch={setShowSearch} showSearch={showSearch} />
      {showSearch && <SearchField />}
      {friends && <FriendList />}
    </>
  );
}

export default FriendViewController;
