import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { AlertContext } from '../../context/alert/AlertState';
import { ChannelContext } from '../../context/channels/ChannelState';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  submitButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
  },
}));

export default function CreateGroup({ setDisplayItem = (f) => f }) {
  const history = useHistory();
  const alertContext = useContext(AlertContext);
  const channelContext = useContext(ChannelContext);
  const { setAlert } = alertContext;
  const { createNewGroup } = channelContext;
  const classes = useStyles();
  const [userForm, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = userForm;
  const submitForm = async (e) => {
    e.preventDefault();
    const input = {
      name,
      description,
    };
    if (name === '') {
      setAlert('Group name is required', 'error');
    } else {
      setDisplayItem('');
      createNewGroup(input);
      setAlert('Group was successfully created', 'success');
      setForm({ name: '', description: '' });
      history.push('/');
    }
  };
  const onChange = (e) => {
    setForm({ ...userForm, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.root}>
      {' '}
      <Typography variant="h6" noWrap>
        Create a Group
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ marginTop: '2rem' }}
            label={!name && 'Group Name'}
            id="outlined-margin-none"
            name="name"
            value={name}
            onChange={onChange}
            className={classes.textField}
            variant="outlined"
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <TextField
            style={{ width: '100%' }}
            id="outlined-multiline-flexible"
            label={!description && 'Description'}
            multiline
            name="description"
            rowsMax={6}
            value={description}
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div className={classes.submitButton}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<CreateIcon />}
            onClick={submitForm}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
