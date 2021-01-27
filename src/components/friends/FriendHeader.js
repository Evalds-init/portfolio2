import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FriendHeader({ setShowSearch = (f) => f, showSearch }) {
  const classes = useStyles();
  return (
    <>
      {' '}
      <List className={classes.root}>
        <ListItem>
          <ListItemIcon style={{ marginLeft: '1rem', marginRight: '-1rem' }}>
            <FaceIcon />
          </ListItemIcon>
          <Typography variant="h5" noWrap>
            Friends
          </Typography>
          <ListItemSecondaryAction onClick={setShowSearch}>
            <IconButton aria-label="add">
              {showSearch ? <ClearIcon /> : <AddIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>{' '}
      </List>
    </>
  );
}
