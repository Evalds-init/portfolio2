import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { ChannelContext } from '../../../context/channels/ChannelState';
import { UserContext } from '../../../context/user/UserState';
import SendIcon from '@material-ui/icons/Send';
function GroupChatInput() {
  const [text, setText] = useState('');
  const channelContext = useContext(ChannelContext);
  const userContext = useContext(UserContext);
  const { postGroupMessage, group } = channelContext;
  const { user } = userContext;

  const postMessage = () => {
    const input = {
      text: text,
      groupMessageGroupId: group.id,
      messageUserName: user.name,
      groupMessageUserId: user.name,
      media: user.image,
    };
    postGroupMessage(input);
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

export default GroupChatInput;
