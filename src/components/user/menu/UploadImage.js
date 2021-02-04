import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Storage } from 'aws-amplify';
import { UserContext } from '../../../context/user/UserState';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const userContext = useContext(UserContext);
  const { user, updateCurrentUser } = userContext;
  const classes = useStyles();
  const onChange = (e) => {
    let number = Math.floor(Math.random() * 10 + 1);
    const data = {
      id: user.id,
      name: user.name,
      userAvatar: `https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/avatar${number}${user.name}.jpg`,
    };

    const file = e.target.files[0];

    Storage.put(`avatar${number}${user.name}.jpg`, file, {
      contentType: 'image/png',
    })
      .then((result) => updateCurrentUser(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="side-nav-input"
        multiple
        onChange={onChange}
        type="file"
      />

      <label htmlFor="side-nav-input">
        <Button
          color="primary"
          aria-label="upload picture"
          size="small"
          component="span"
          className={classes.button}
          startIcon={<PhotoCamera />}
        >
          Avatar
        </Button>
      </label>
    </div>
  );
}
