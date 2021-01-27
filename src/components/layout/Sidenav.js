import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WavesIcon from '@material-ui/icons/Waves';
import Message from '@material-ui/icons/Message';
import UserAvatar from '../user/UserAvatar';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../context/user/UserState';
import { ChannelContext } from '../../context/channels/ChannelState';
import ChannelHeader from '../channels/ChannelHeader';
import FriendFrame from '../friends/FriendFrame';
import CreateChannel from '../channels/CreateChannel';
import ChannelChat from '../chat/channel/ChannelChat';
import Preloader from '../../utils/Preloader';
import Profile from '../profile/Profile';
import FriendRequest from '../profile/FriendRequest';
import FriendProfile from '../profile/FriendProfile';
import FriendChat from '../chat/friends/FriendChat';
import ChannelInfo from '../channels/ChannelInfo';
import EditProfileForm from '../user/EditProfileForm';
import BarMenu from './BarMenu';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  button: {
    backgroundColor: '#fff',
    width: '100%',
    color: '#0069d9',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      zIndex: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    toolbar: theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '5rem',
  },
}));

function Sidenav({ ...props }) {
  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useReducer(
    (mobileOpen) => !mobileOpen,
    false
  );
  // check if the user is authorized
  const userContext = useContext(UserContext);
  const channelContext = useContext(ChannelContext);
  const { channel, profile } = channelContext;
  const { user } = userContext;
  const [sidenavItem, setSidenavItem] = useState('friend');
  let history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const friendDrawer = (
    <>
      <List>
        <ListItem button>
          <WavesIcon style={{ margin: 'auto', color: '#9dbf8e' }} />
          <Typography variant="h6" noWrap>
            React Transmition
          </Typography>
        </ListItem>
      </List>
      <div className={classes.toolbar}>
        <Divider />
        <FriendFrame user={user} />
      </div>
    </>
  );
  const groupDrawer = (
    <>
      <List>
        <ListItem button>
          <WavesIcon style={{ margin: 'auto', color: '#9dbf8e' }} />
          <Typography variant="h6" noWrap>
            React Transmition
          </Typography>
        </ListItem>
      </List>
      <div className={classes.toolbar}>
        <Divider />
        <ChannelHeader />
      </div>
    </>
  );

  const userDrawer = (
    <div>
      <List>
        <ListItem button>
          <WavesIcon style={{ margin: 'auto', color: '#9dbf8e' }} />
          <Typography variant="h6" noWrap>
            React Transmition
          </Typography>
        </ListItem>
      </List>
      <div className={classes.toolbar}>
        <Divider />
        <UserAvatar />
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Message style={{ marginRight: '1rem', color: '#fff' }} />
          <Typography variant="h5" noWrap>
            {channel && '#'}
          </Typography>

          <Typography variant="h6" noWrap>
            {channel?.name ? channel.name : profile?.name && profile.name}
          </Typography>
          <BarMenu
            setSidenavItem={setSidenavItem}
            setMobileOpen={setMobileOpen}
          />
        </Toolbar>
      </AppBar>{' '}
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {sidenavItem === 'friend'
                ? friendDrawer
                : sidenavItem === 'group'
                ? groupDrawer
                : userDrawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {sidenavItem === 'friend'
                ? friendDrawer
                : sidenavItem === 'group'
                ? groupDrawer
                : userDrawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path="/friendchat" render={() => <FriendChat />} />
            <Route path="/friendprofile" render={() => <FriendProfile />} />
            <Route path="/friendprofile" render={() => <FriendProfile />} />
            <Route path="/friendrequest" render={() => <FriendRequest />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/channelchat" render={() => <ChannelChat />} />
            <Route path="/createchannel" render={() => <CreateChannel />} />
            <Route path="/channelinfo" render={() => <ChannelInfo />} />
            <Route
              path="/editprofileform"
              render={() => <EditProfileForm user={user} />}
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

Sidenav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidenav;
