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
import { GroupContext } from '../../../context/group/GroupState';
import GroupChatInput from './GroupChatInput';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateGroupMessage } from '../../../graphql/subscriptions';

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

const GroupChat = () => {
  const classes = useStyles();
  const groupContext = useContext(GroupContext);

  const { group, pushToGroupChat, clearGroup } = groupContext;

  useEffect(() => {
    if (group) {
      var subscribe = subscribeToMessages();

      return () => {
        subscribe.unsubscribe();
      };
    }
    // eslint-disable-next-line
  }, [group]);
  useEffect(() => {
    return () => {
      clearGroup();
    };
    // eslint-disable-next-line
  }, []);
  const subscribeToMessages = () => {
    const input = {
      groupMessageGroupId: group.id,
    };
    console.log(input);
    const subscribe = API.graphql(
      graphqlOperation(onCreateGroupMessage, input)
    ).subscribe({
      next: (noteData) => {
        let message = noteData.value.data.onCreateGroupMessage;
        console.log(noteData);
        pushToGroupChat(message);
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
            {group && group?.groupMessages?.items.length > 0 ? (
              group.groupMessages.items.map((message, index) => (
                <>
                  <ListItem key={message.id}>
                    <ListItemAvatar>
                      <Avatar alt="user avatar" src={message.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        message?.messageUserName
                          ? message.messageUserName.toUpperCase()
                          : 'Unknown'
                      }
                    />
                    {
                      // eslint-disable-next-line
                    }
                    <ReactTimeAgo date={message.createdAt} locale="en-US" />
                  </ListItem>
                  <Grid container className={classes.chatResponse} key={index}>
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
          <GroupChatInput />
        </Grid>
      </Grid>
    </div>
  );
};

export default GroupChat;
