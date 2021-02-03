import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ReactTimeAgo from 'react-time-ago';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { FriendContext } from '../../../context/friends/FriendState';
import FriendInput from './FriendInput';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateMessage } from '../../../graphql/subscriptions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  chatResponse: {
    paddingLeft: '4.4rem',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
});

const FriendChat = () => {
  const classes = useStyles();
  const friendContext = useContext(FriendContext);
  const {
    friendChannel,
    pushToFriendChannel,
    loadingFriendChannel,
    clearFriendChannel,
  } = friendContext;


  useEffect(() => {
    if (!loadingFriendChannel) {
      var subscribe = subscribeToMessages();
      return () => {
        clearFriendChannel();
        subscribe.unsubscribe();
      };
    }
    // eslint-disable-next-line
  }, [loadingFriendChannel]);

  const subscribeToMessages = () => {
    const input = {
      messageChannelId: friendChannel.id,
    };
    const subscribe = API.graphql(
      graphqlOperation(onCreateMessage, input)
    ).subscribe({
      next: (noteData) => {
        if (noteData.value.data.onCreateMessage) {
          let message = noteData.value.data.onCreateMessage;
          console.log(noteData);
          pushToFriendChannel(message);
        }
      },
    });
    return subscribe;
  };

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          {' '}
          <List className={classes.messageArea}>
            {friendChannel && friendChannel.messages.items.length !== 0 ? (
              friendChannel.messages.items.map((message, index) => (
                <Grid container key={message.id}>
                  <Grid item xs={12}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt="user avatar" src={message.media} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          message?.messageUserName
                            ? message.messageUserName.toUpperCase()
                            : 'Unknown'
                        }
                      />
                      {// eslint-disable-next-line
                      }
                      <ReactTimeAgo date={message.createdAt} locale="en-US" />
                    </ListItem>
                    <Grid container className={classes.chatResponse}>
                      {' '}
                      <Grid item xs={12}>
                        {' '}
                        <Typography
                          component="p"
                          variant="h6"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {message.text}
                        </Typography>
                        <Divider />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            ) : (
              <Grid container className={classes.chatResponse}>
                {' '}
                <Grid item xs={12}>
                  {' '}
                  <Typography
                    component="p"
                    variant="h6"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Please post your first message.
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>
            )}
          </List>
          <Divider />
          <FriendInput />
        </Grid>
      </Grid>
    </div>
  );
};

export default FriendChat;
