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
  const useContext = useContext(UserContext);
  const { user, updateCurrentUser } = useContext;
  const classes = useStyles();
  const onChange = (e) => {
    const input = {
      id: user.id,
      name: user.name,
      email: user.email,
      userId: user.userId,
      phone: user.phone,
      aboutMe: user.aboutMe,
      image: `https://agora69ee83a136fe49c88773e39cdc2de328140432-dev.s3-eu-west-1.amazonaws.com/public/${user.name}.jpg`,
    };

    const file = e.target.files[0];

    Storage.put(`${user.name}.jpg`, file, {
      contentType: 'image/png',
    })
      .then((result) => updateCurrentUser(input))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        onChange={onChange}
        type="file"
      />

      <label htmlFor="contained-button-file">
        <Button
          color="primary"
          aria-label="upload picture"
          size="small"
          component="span"
          className={classes.button}
          startIcon={<PhotoCamera />}
        >
          Upload
        </Button>
      </label>
    </div>
  );
}
