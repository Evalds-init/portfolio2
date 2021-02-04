import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { UserContext } from '../../../context/user/UserState';
import { Storage } from 'aws-amplify';
import FloatingUploadButton from '../../../utils/FloatingUploadButton';
const useStyles = makeStyles(() => ({
  floatRight: {
    color: '#fff',
    float: 'right',
    marginTop: '-40px',
    marginRight: '20px',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    zIndex: '0',
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
function CardImage() {
  const cardStyles = useStyles();
  const userContext = useContext(UserContext);

  const { user, updateCurrentUser, check } = userContext;
  useEffect(() => {}, [check]);

  const updateUserAvatar = (e) => {
    let number = Math.floor(Math.random() * 100 + 1);
    var input = {
      id: user.id,
      name: user.name,
      userAvatar: `https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/avatar${number}${user.name}.jpg`,
    };

    const file = e.target.files[0];

    Storage.put(`avatar${number}${user.name}.jpg`, file, {
      contentType: 'image/png',
    })
      .then((result) => updateCurrentUser(input))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Avatar className={cardStyles.avatar} src={user?.userAvatar} />
      <FloatingUploadButton
        style={cardStyles.floatRight}
        uploadFunction={updateUserAvatar}
        labelId={'update-user-avatar'}
      />
    </>
  );
}

export default CardImage;
