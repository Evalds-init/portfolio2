import React, { useEffect, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { ChannelContext } from '../../context/channels/ChannelState';
import { UserContext } from '../../context/user/UserState';
import Preloader from '../../utils/Preloader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80vh',
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '80%',
    height: '70vh',
    color: theme.palette.text.secondary,
    marginTop: '10%',
  },
  header: {
    color: '#0069d9',
    marginBottom: '3rem',
  },
  icon: {
    height: '25vh',
  },
}));
function FriendProfile() {
  const classes = useStyles();
  const channelContext = useContext(ChannelContext);
  const userContext = useContext(UserContext);
  const { profile, addFriend, loadingProfile, clearProfile } = channelContext;
  const { user } = userContext;
  const onClick = () => {
    const input = {
      request: 'pending',
      name: user.name,
      requesterImage: user.image,
      friendFriendId: profile.name,
    };
    addFriend(input);
  };
  useEffect(() => {
    return () => {
      clearProfile();
    };
  }, []);
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        {loadingProfile ? (
          <Preloader />
        ) : (
          <Paper className={classes.paper} elevation={3}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {' '}
              <Avatar
                alt="Remy Sharp"
                src={profile?.image && profile.image}
                className={classes.large}
              />
              <Grid item xs={12}>
                {' '}
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  className={classes.header}
                >
                  {profile?.name && profile.name}
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                className={classes.icon}
              >
                <Grid item xs={12}>
                  {' '}
                  <Typography variant="subtitle2" paragraph align="center">
                    {profile?.aboutMe && profile.aboutMe}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <IconButton
                  color="secondary"
                  aria-label="add a friend"
                  onClick={onClick}
                >
                  <HistoryIcon />
                </IconButton>{' '}
                <IconButton color="secondary" aria-label="add a friend">
                  <PeopleAltIcon />
                </IconButton>
              </Grid>
            </Grid>{' '}
          </Paper>
        )}
      </Grid>
    </div>
  );
}

export default FriendProfile;
