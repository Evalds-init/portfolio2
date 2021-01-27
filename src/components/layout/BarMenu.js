import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import GroupsIcon from '@material-ui/icons/Group';
import { Auth } from 'aws-amplify';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
export default function BarMenu({
  setSidenavItem = (f) => f,
  setMobileOpen = (f) => f,
}) {
  const classes = useStyles();
  const setGroup = () => {
    setSidenavItem('group');
    setMobileOpen();
  };
  const setUser = () => {
    setSidenavItem('user');
    setMobileOpen();
  };
  const setFriend = () => {
    setSidenavItem('friend');
    setMobileOpen();
  };
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  return (
    <div className={classes.grow}>
      <IconButton
        aria-label="show  new notifications"
        color="inherit"
        onClick={setFriend}
      >
        <FaceIcon
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        />
      </IconButton>
      <IconButton onClick={setGroup}>
        <GroupsIcon
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        onClick={setUser}
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="exit app"
        aria-haspopup="true"
        color="inherit"
        onClick={signOut}
      >
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}
