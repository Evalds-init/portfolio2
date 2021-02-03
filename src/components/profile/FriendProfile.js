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
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { ChannelContext } from '../../context/channels/ChannelState';
// import { FriendContext } from '../../context/friends/FriendState';
// import { UserContext } from '../../context/user/UserState';
import HistoryIcon from '@material-ui/icons/History';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
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
function FriendProfile() {
  const cardStyles = useStyles();
  const history = useHistory();
  const mediaStyles = useSlopeCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const channelContext = useContext(ChannelContext);
  // const friendContext = useContext(FriendContext);
  // const userContext = useContext(UserContext);
  const { profile, loadingProfile, clearProfile } = channelContext;

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
      <Avatar className={cardStyles.avatar} src={profile?.avatar} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={profile?.name.toUpperCase()}
          body={profile?.aboutMe}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <PeopleAltIcon />
        </IconButton>
        <IconButton>
          <HistoryIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default FriendProfile;
