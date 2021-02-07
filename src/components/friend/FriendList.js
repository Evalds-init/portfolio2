import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChatIcon from '@material-ui/icons/Chat';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HourglassIcon from '@material-ui/icons/HourglassFullTwoTone';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import { GroupContext } from '../../context/group/GroupState';
import { FriendContext } from '../../context/friends/FriendState';
import { UserContext } from '../../context/user/UserState';
import { Link, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '2rem',
  },
}));

function renderRow(props) {
  const { index, data } = props;
  const {
    getSingleProfile,
    updatedFriendList,
    history,
    getFriendChannel,
  } = data;
  const getProfile = () => {
    updatedFriendList[index].request === 'pending'
      ? history.push('friendrequest')
      : history.push('friendprofile');
    getSingleProfile(updatedFriendList[index].name);
  };
  const openChat = () => {
    getFriendChannel(updatedFriendList[index].friendChannelId);
  };
  return (
    <>
      {updatedFriendList.length > 0 && (
        <List>
          <ListItem key={index} button>
            <ListItemAvatar onClick={getProfile}>
              <Avatar
                alt={updatedFriendList[index]?.name}
                src={
                  updatedFriendList[index]?.userAvatar
                    ? updatedFriendList[index].userAvatar
                    : updatedFriendList[index]?.friendImage &&
                      updatedFriendList[index].friendImage
                }
              />
            </ListItemAvatar>
            <ListItemText
              id={updatedFriendList[index]?.id}
              primary={updatedFriendList[index]?.name.toUpperCase()}
            />
            <ListItemSecondaryAction>
              {updatedFriendList[index]?.request === 'pending' ? (
                <IconButton edge="end" aria-label="delete">
                  <AnnouncementIcon />
                </IconButton>
              ) : updatedFriendList[index]?.request === 'sent' ? (
                <IconButton edge="end" aria-label="delete">
                  <HourglassIcon />
                </IconButton>
              ) : (
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={openChat}
                  component={Link}
                  to={'/friendchat'}
                >
                  <ChatIcon />
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )}
    </>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function FriendList() {
  const classes = useStyles();
  let history = useHistory();
  const groupContext = useContext(GroupContext);
  const friendContext = useContext(FriendContext);
  const userContext = useContext(UserContext);
  const { getSingleProfile  } = groupContext;
  const { friends, getFriendChannel } = friendContext;
  const { user } = userContext;
  const length = friends?.length || 0;
  let updatedFriendList = [];
  for (let i = 0; i < friends.length; i++) {
    updatedFriendList.push({
      ...friends[i],
      ...user.friends.items.find(
        (itmInner) => itmInner.name === friends[i].name
      ),
    });
  }

  return (
    <div className={classes.root}>
      <FixedSizeList
        height={500}
        width={220}
        itemSize={40}
        itemCount={length}
        itemData={{
          updatedFriendList,
          getSingleProfile,
          getFriendChannel,
          history,
        }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
