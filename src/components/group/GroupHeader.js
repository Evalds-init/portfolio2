import React, { useEffect, useContext, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GroupList from './groupList/GroupList';
import GroupSearchField from './GroupSearchField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GroupsIcon from '@material-ui/icons/Group';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { GroupContext } from '../../context/group/GroupState';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import { UserContext } from '../../context/user/UserState';
import OwnedGroupList from './groupList/OwnedGroupList';

import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '280px',
    backgroundColor: theme.palette.background.paper,
  },
  menuButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '15px',
    paddingBottom: '15px',
  },
  button: {
    backgroundColor: 'white',
  },
}));

export default function GroupHeader() {
  const groupContext = useContext(GroupContext);
  const { getUserOwnedGroups, getUserGroups } = groupContext;
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const classes = useStyles();
  const [showSearch, setShowSearch] = useReducer(
    (showSearch) => !showSearch,
    false
  );
  const [groupViewToggle, setGroupoViewToggle] = useReducer(
    (groupViewToggle) => !groupViewToggle,
    true
  );
  useEffect(() => {
    user && getUserOwnedGroups(user.ownedGroups.items);
    user && getUserGroups(user.groups.items);
    // eslint-disable-next-line
  }, []);
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemIcon style={{ marginLeft: '1rem', marginRight: '-1rem' }}>
          <GroupsIcon />
        </ListItemIcon>
        <Typography variant="h5" noWrap onClick={setGroupoViewToggle}>
          Groups
        </Typography>
        <ListItemSecondaryAction>
          <IconButton aria-label="add" component={Link} to={'/creategroup'}>
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>{' '}
      <div className={classes.menuButtons}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<SearchIcon />}
          disableElevation
          onClick={setShowSearch}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="default"
          disableElevation
          className={classes.button}
          startIcon={<ListIcon />}
          onClick={setGroupoViewToggle}
        >
          Created
        </Button>
      </div>
      {showSearch && <GroupSearchField />}
      {groupViewToggle ? <GroupList /> : <OwnedGroupList />}
    </List>
  );
}
