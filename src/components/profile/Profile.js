import React, { useEffect, useContext } from 'react';
import cx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { GroupContext } from '../../context/group/GroupState';
import { FriendContext } from '../../context/friends/FriendState';
import { UserContext } from '../../context/user/UserState';
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
function Profile() {
  const cardStyles = useStyles();
  let history = useHistory();
  const mediaStyles = useSlopeCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const groupContext = useContext(GroupContext);
  const friendContext = useContext(FriendContext);
  const userContext = useContext(UserContext);
  const { profile, loadingProfile, clearProfile } = groupContext;
  const { user } = userContext;
  const { addFriend } = friendContext;
  const onClick = () => {
    const friendData = {
      id: `${profile.name}${user.name}`,
      request: 'pending',
      requester: user.name,
      name: user.name,
      friendImage: user.avatar,
      friendFriendId: profile.name,
    };
    const userData = {
      id: `${user.name}${profile.name}`,
      request: 'sent',
      requester: user.name,
      name: profile.name,
      friendImage: profile.avatar,
      friendFriendId: user.name,
    };
    addFriend(friendData, userData);
    history.push('/');
  };
  useEffect(() => {
    !loadingProfile && !profile && history.push('/');
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    return () => {
      clearProfile();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <Card className={cx(cardStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          profile?.image
            ? profile.image
            : 'https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/white_wallpaper_5_4k_hd_white.jpg'
        }
      />
      <Avatar className={cardStyles.avatar} src={profile?.userAvatar} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={profile?.name.toUpperCase()}
          body={profile?.aboutMe}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton onClick={onClick}>
          <PersonAddSharpIcon />
        </IconButton>
        <IconButton></IconButton>
      </Box>
    </Card>
  );
}

export default Profile;
