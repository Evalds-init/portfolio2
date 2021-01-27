import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
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

export default function Editprofile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        color="primary"
        size="small"
        component={Link}
        to={'/editprofileform'}
        className={classes.button}
        startIcon={<Edit />}
      >
        Edit
      </Button>
    </div>
  );
}
