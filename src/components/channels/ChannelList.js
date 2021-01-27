import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { ChannelContext } from '../../context/channels/ChannelState';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import WorkIcon from '@material-ui/icons/Work';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import { useHistory, Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },

}));

function renderRow(props) {
  const { data, index, style } = props;
  const { getSingleChannel, channels, history } = data;

  const enterChat = () => {
    getSingleChannel(channels[index].id);
    history.push('/channelchat');
  };
  const viewChannel = () => {
    getSingleChannel(channels[index].id);
    history.push('/channelinfo');
  };
  return (
    <>
      {channels.length > 0 && (
        <ListItem style={{ paddingLeft: '2rem' }} key={index}>
          <ListItemAvatar onClick={viewChannel}>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={channels[index].name} />
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

export default function ChannelList() {
  const classes = useStyles();
  let history = useHistory();
  const channelContext = useContext(ChannelContext);
  const { channels, getSingleChannel } = channelContext;
  const length = channels.length;
  return (
    <div className={classes.root}>
      <FixedSizeList
        height={500}
        width={250}
        itemSize={50}
        itemCount={length}
        itemData={{ channels, getSingleChannel, history }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
