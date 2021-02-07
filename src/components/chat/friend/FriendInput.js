import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { FriendContext } from '../../../context/friends/FriendState';
import { UserContext } from '../../../context/user/UserState';
import SendIcon from '@material-ui/icons/Send';
function FriendInput() {
  const [text, setText] = useState('');
  const friendContext = useContext(FriendContext);
  const userContext = useContext(UserContext);
  const { postFriendMessage, friendChannel } = friendContext;
  const { user } = userContext;

  const postMessage = () => {
    const input = {
      text: text,
      messageChannelId: friendChannel.id,
      messageUserName: user.name,
      avatar: user.userAvatar,
    };
    postFriendMessage(input);
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Grid container style={{ padding: '20px' }}>
      <Grid item xs={11}>
        <TextField
          id="outlined-basic-email"
          label="Type Something"
          fullWidth
          onChange={onChange}
          value={text}
          name="text"
        />
      </Grid>
      <Grid item xs={1} align="right">
        <Fab color="primary" aria-label="add" onClick={postMessage}>
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default FriendInput;
