import React, { useState, useEffect, useContext } from 'react';

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
import UserAvatar from '../user/UserAvatar';
import { UserContext } from '../../context/user/UserState';
import { GroupContext } from '../../context/group/GroupState';
import { FriendContext } from '../../context/friends/FriendState';
import GroupHeader from '../group/GroupHeader';
import FriendFrame from '../friend/FriendViewController';
import CreateGroup from '../group/CreateGroup';
import GroupChat from '../chat/group/GroupChat';
import Profile from '../profile/Profile';
import MyProfile from '../profile/MyProfile';
import FriendRequest from '../profile/FriendRequest';
import FriendProfile from '../profile/FriendProfile';
import FriendChat from '../chat/friend/FriendChat';
import GroupCardBody from '../group/groupCard/GroupCardBody';
import EditProfileForm from '../user/EditProfileForm';
import BarMenu from './BarMenu';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { onUserMutation, onFriendMutation } from '../../graphql/subscriptions';

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
    backgroundColor: '#E59400',
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
  const groupContext = useContext(GroupContext);
  const friendContext = useContext(FriendContext);
  const { group, friendChannel } = groupContext;
  const { fetchFriends, addFriendSubsciption } = friendContext;
  const { user, userSubscription } = userContext;
  const [sidenavItem, setSidenavItem] = useState('friend');

  useEffect(() => {
    var subscribe = subscribeToUser();

    return () => {
      subscribe.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    fetchFriends(user.friends.items);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    var subscribe = subscribeToAddFriend();
    console.log('subscibed');
    return () => {
      subscribe.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const subscribeToUser = () => {
    const input = {
      name: user.name,
    };
    const subscribe = API.graphql(
      graphqlOperation(onUserMutation, input)
    ).subscribe({
      next: (noteData) => {
        if (noteData.value.data.onUserMutation) {
          const data = noteData.value.data.onUserMutation;
          userSubscription(data);
        }
      },
    });
    return subscribe;
  };
  const subscribeToAddFriend = () => {
    const input = {
      friendFriendId: user.name,
    };
    const subscribe = API.graphql(
      graphqlOperation(onFriendMutation, input)
    ).subscribe({
      next: (noteData) => {
        if (noteData.value.data.onFriendMutation) {
          addFriendSubsciption(noteData.value.data.onFriendMutation);
          console.log(noteData.value.data.onFriendMutation);
        }
      },
    });
    return subscribe;
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
        <UserAvatar />
        <Divider />
        <FriendFrame />
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
        <UserAvatar />
        <Divider />
        <GroupHeader />
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <BrowserRouter>
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

            <Typography variant="h5" noWrap>
              {group && '#'}
            </Typography>

            <Typography variant="h6" noWrap>
              {group?.name
                ? group.name
                : friendChannel &&
                  friendChannel.friends.items[0].name.toUpperCase()}
            </Typography>

            <BarMenu
              setSidenavItem={setSidenavItem}
              setMobileOpen={setMobileOpen}
            />
          </Toolbar>
        </AppBar>{' '}
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
                : sidenavItem === 'group' && groupDrawer}
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
                : sidenavItem === 'group' && groupDrawer}
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
            <Route path="/myprofile" render={() => <MyProfile />} />
            <Route path="/groupchat" render={() => <GroupChat />} />
            <Route path="/creategroup" render={() => <CreateGroup />} />
            <Route path="/groupinfo" render={() => <GroupCardBody />} />
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
