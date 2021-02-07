import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { GroupContext } from '../../context/group/GroupState';
import { UserContext } from '../../context/user/UserState';
import { FriendContext } from '../../context/friends/FriendState';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    border: '2px solid #fff',
    margin: '-68px 12px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));
function FriendRequest() {
  let history = useHistory();
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const friendContext = useContext(FriendContext);
  const groupContext = useContext(GroupContext);
  const userContext = useContext(UserContext);
  const { acceptFriend, rejectFriendRequest } = friendContext;
  const { profile, loadingProfile, clearProfile } = groupContext;
  const { user } = userContext;
  const acceptFriendRequest = () => {
    const friend = profile.name;
    const username = user.name;
    acceptFriend(friend, username);
    history.push('/');
  };
  const rejectRequest = () => {
    const friend = profile.name;
    const username = user.name;
    rejectFriendRequest(friend, username);
    history.push('/');
  };
  useEffect(() => {
    return () => {
      clearProfile();
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    !loadingProfile && !profile && history.push('/');
    // eslint-disable-next-line
  }, []);
  return (
    <Card className={cx(cardStyles.root)}>
      <CardMedia classes={mediaStyles} image={profile?.image} />
      <Avatar className={cardStyles.avatar} src={profile?.userAvatar} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={profile?.name.toUpperCase()}
          body={profile?.aboutMe}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton onClick={acceptFriendRequest}>
          <PersonAddSharpIcon />
        </IconButton>
        <IconButton>
          <RemoveCircleOutlineIcon onClick={rejectRequest} />
        </IconButton>
      </Box>
    </Card>
  );
}

export default FriendRequest;
