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
import { ChannelContext } from '../../context/channels/ChannelState';
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
  const { index, style, data } = props;
  const { getSingleProfile, users, history, getFriendChannel } = data;
  const getProfile = (e, value) => {
    users[index].request === 'pending'
      ? history.push('friendrequest')
      : history.push('friendprofile');
    getSingleProfile(users[index].name);
  };
  const openChat = () => {
    getFriendChannel(users[index].friendChannelId);
  };
  return (
    <>
      {users.length > 0 && (
        <List>
          <ListItem key={index} button>
            <ListItemAvatar onClick={getProfile}>
              <Avatar
                alt={users[index]?.name}
                src={
                  users[index]?.requesterImage && users[index].requesterImage
                }
              />
            </ListItemAvatar>
            <ListItemText id={users[index]?.id} primary={users[index]?.name} />
            <ListItemSecondaryAction>
              {users[index]?.request === 'pending' ? (
                <IconButton edge="end" aria-label="delete">
                  <AnnouncementIcon />
                </IconButton>
              ) : users[index]?.request === 'sent' ? (
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

export default function FriendList({ user }) {
  const classes = useStyles();
  let history = useHistory();
  const length = user?.friends?.items?.length || 0;
  const channelContext = useContext(ChannelContext);
  const { getSingleProfile, getFriendChannel } = channelContext;
  let users = user?.friends?.items || [];
  return (
    <div className={classes.root}>
      <FixedSizeList
        height={500}
        width={220}
        itemSize={40}
        itemCount={length}
        itemData={{ users, getSingleProfile, getFriendChannel, history }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
