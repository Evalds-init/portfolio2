import React, { useEffect, useContext } from 'react';
import cx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { UserContext } from '../../context/user/UserState';
import CardImage from './user/CardImage';
import CardAvatar from './user/CardAvatar';
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
 
}));
function MyProfile() {
  const cardStyles = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const userContext = useContext(UserContext);

  const { check, user } = userContext;
  useEffect(() => {}, [check]);

  return (
    <Card className={cx(cardStyles.root)}>
      <CardImage />
      <CardAvatar />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={user?.name.toUpperCase()}
          body={user?.aboutMe}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Link to="/editprofileform">
            {' '}
            <EditIcon />
          </Link>
        </IconButton>
        <IconButton></IconButton>
      </Box>
    </Card>
  );
}

export default MyProfile;
