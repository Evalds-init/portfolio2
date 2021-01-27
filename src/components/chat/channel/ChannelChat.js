import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import ReactTimeAgo from 'react-time-ago';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ChannelContext } from '../../../context/channels/ChannelState';
import { UserContext } from '../../../context/user/UserState';
import ChannelInput from './ChannelInput';
import { API, graphqlOperation } from 'aws-amplify';
import {
  onCreateMessage,
  onUpdateChannel,
} from '../../../graphql/subscriptions';
import { updateChannel } from '../../../graphql/mutations';

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

const ChannelChat = ({ setDisplayItem = (f) => f }) => {
  const classes = useStyles();
  const channelContext = useContext(ChannelContext);
  const userContext = useContext(UserContext);
  const { channel, pushToChannel, clearChannel } = channelContext;
  const {} = userContext;

  useEffect(() => {
    if (channel) {
      let subscribe = subscribeToMessages();
      return () => {
        console.log('unsubscribed');
        subscribe.unsubscribe();
      };
    }
  }, [channel]);
  useEffect(() => {
    return () => {
      clearChannel();
    };
  }, []);
  const subscribeToMessages = () => {
    const input = {
      messageChannelId: channel.id,
    };
    const subscribe = API.graphql(
      graphqlOperation(onCreateMessage, input)
    ).subscribe({
      next: (noteData) => {
        if (noteData.value.data.onCreateMessage) {
          let message = noteData.value.data.onCreateMessage;
          console.log(noteData);
          pushToChannel(message);
        }
      },
    });
    return subscribe;
  };

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}></Grid>
        <Grid item xs={12}>
          {' '}
          <List className={classes.messageArea}>
            {channel && channel.messages.items.length !== 0 ? (
              channel.messages.items.map((message, index) => (
                <>
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt="user avatar" src={message.media} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        message?.messageUserName
                          ? message.messageUserName
                          : 'Unknown'
                      }
                    />
                    <ReactTimeAgo date={message.createdAt} locale="en-US" />
                  </ListItem>
                  <Grid
                    container
                    className={classes.chatResponse}
                    key={message.id}
                  >
                    {' '}
                    <Grid item xs={12}>
                      {' '}
                      <Typography
                        key={index}
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
                </>
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
          <ChannelInput />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChannelChat;
