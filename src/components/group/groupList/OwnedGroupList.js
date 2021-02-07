import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { GroupContext } from '../../../context/group/GroupState';
import IconButton from '@material-ui/core/IconButton';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import WorkIcon from '@material-ui/icons/Work';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { data, index } = props;
  const { getSingleGroup, ownedGroups, history } = data;

  const enterChat = () => {
    getSingleGroup(ownedGroups[index].id);
    history.push('/groupchat');
  };
  const viewChannel = () => {
    getSingleGroup(ownedGroups[index].id);
    history.push('/groupinfo');
  };
  return (
    <>
      {ownedGroups.length > 0 && (
        <ListItem style={{ paddingLeft: '2rem' }} key={index}>
          <ListItemAvatar onClick={viewChannel}>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={ownedGroups[index].name} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              color="primary"
              onClick={enterChat}
            >
              <ChatIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function OwnedGroupList() {
  const classes = useStyles();
  let history = useHistory();
  const groupContext = useContext(GroupContext);
  const { ownedGroups, getSingleGroup } = groupContext;
  const length = ownedGroups?.length;
  return (
    <div className={classes.root}>
      <FixedSizeList
        height={500}
        width={250}
        itemSize={50}
        itemCount={length}
        itemData={{ ownedGroups, getSingleGroup, history }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
