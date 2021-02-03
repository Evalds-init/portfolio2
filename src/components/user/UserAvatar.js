import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AvatarMenu from './AvatarMenu';
import { UserContext } from '../../context/user/UserState';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserAvatar() {
  let history = useHistory();
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const { user, check } = userContext;
  useEffect(() => {}, [check]);
  const getUserProfile = () => {
    history.push('/myprofile');
  };

  return (
    <List dense className={classes.root}>
      {[0].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar onClick={getUserProfile}>
              <Avatar
                alt={`https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png`}
                src={user.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={user?.name.toUpperCase()}
       
            />
            <ListItemSecondaryAction>
              <AvatarMenu />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
