import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChannelList from './GroupList';
import Typography from '@material-ui/core/Typography';
import GroupsIcon from '@material-ui/icons/Group';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { GroupContext } from '../../context/group/GroupState';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '280px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function GroupHeader() {
  const groupContext = useContext(GroupContext);
  const { getAllGroups } = groupContext;

  const classes = useStyles();
  useEffect(() => {
    getAllGroups();
    // eslint-disable-next-line
  }, []);

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemIcon style={{ marginLeft: '1rem', marginRight: '-1rem' }}>
          <GroupsIcon />
        </ListItemIcon>
        <Typography variant="h5" noWrap>
          Groups
        </Typography>
        <ListItemSecondaryAction>
          <IconButton aria-label="add" component={Link} to={'/createchannel'}>
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>{' '}
      <ChannelList />
    </List>
  );
}
