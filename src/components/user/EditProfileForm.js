import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom';
import { AlertContext } from '../../context/alert/AlertState';
import { UserContext } from '../../context/user/UserState';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function EditProfileForm({ user }) {
  let history = useHistory();
  const classes = useStyles();
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);
  const { setAlert } = alertContext;
  const { updateCurrentUser, error } = userContext;
  useEffect(() => {
    error !== null && setAlert('Something went wrong', 'error');
  }, [error]);

  const [userForm, setForm] = useState({
    name: user.name,
    // address_line1: user?.address?.adress_line1 || '',
    // address_line2: user?.address?.adress_line2 || '',
    // city: user?.address?.city || '',
    // postcode: user?.address?.postcode || '',
    email: user?.email || '',
    aboutMe: user?.aboutMe || '',
  });

  const {
    id,
    name,
    address_line1,
    address_line2,
    city,
    postcode,
    email,
    aboutMe,
  } = userForm;
  const submitForm = (e) => {
    e.preventDefault();
    const input = {
      id: user.id,
      userId: user.userId,
      name: name.trim(),
      email,
      aboutMe,
      // address: {
      //   address_line1,
      //   address_line2,
      //   city,
      //   postcode,
      // },
    };
    updateCurrentUser(input);
    history.push('/');
  };
  const onChange = (e) => {
    setForm({ ...userForm, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ marginTop: '2rem' }}
            label={!name && 'Username'}
            id="outlined-margin-none"
            name="name"
            value={name}
            disabled
            onChange={onChange}
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: '2rem' }}
            label={!email && 'Email'}
            name="email"
            id="outlined-margin-none"
            className={classes.textField}
            value={email}
            onChange={onChange}
            variant="outlined"
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <TextField
            style={{ width: '100%' }}
            id="outlined-multiline-flexible"
            label={!aboutMe && 'About Me'}
            multiline
            name="aboutMe"
            rowsMax={6}
            value={aboutMe}
            onChange={onChange}
            variant="outlined"
          />
          <div>
            {' '}
            <TextField
              style={{ marginTop: '2rem' }}
              label={!address_line1 && 'Address Line 1'}
              id="outlined-margin-none"
              name="address_line1"
              className={classes.textField}
              onChange={onChange}
              variant="outlined"
              value={address_line1}
              disabled
            />
            <TextField
              style={{ marginTop: '2rem' }}
              label={!address_line2 && 'Address Line 2'}
              name="address_line2"
              id="outlined-margin-none"
              className={classes.textField}
              onChange={onChange}
              variant="outlined"
              disabled
              value={address_line2}
            />
          </div>
        </div>
        <div>
          {' '}
          <TextField
            style={{ marginTop: '2rem' }}
            label={!city && 'City'}
            id="outlined-margin-none"
            name="city"
            className={classes.textField}
            onChange={onChange}
            variant="outlined"
            disabled
            value={city}
          />
          <TextField
            style={{ marginTop: '2rem' }}
            label={!postcode && 'Postcode'}
            name="postcode"
            id="outlined-margin-none"
            className={classes.textField}
            onChange={onChange}
            variant="outlined"
            value={postcode}
            disabled
          />
        </div>
        <div className={classes.submitButton}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<SaveIcon />}
            onClick={submitForm}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
