import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
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
const FloatingUploadButton = ({
  uploadFunction = (f) => f,
  style,
  labelId,
}) => {
  const classes = useStyles();
  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id={labelId}
        multiple
        onChange={uploadFunction}
        type="file"
      />

      <label htmlFor={labelId}>
        <IconButton
          aria-label="upload"
          className={style}
          size="medium"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};

export default FloatingUploadButton;
