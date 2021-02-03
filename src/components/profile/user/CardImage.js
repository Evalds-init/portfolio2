import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { UserContext } from '../../../context/user/UserState';
import { Storage } from 'aws-amplify';
import FloatingUploadButton from '../../../utils/FloatingUploadButton';

const useStyles = makeStyles(() => ({
  floatLeft: {
    float: 'left',
    color: '#fff',
    marginTop: '-60px',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
  },
}));
function CardImage() {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const userContext = useContext(UserContext);

  const { user, updateCurrentUser, check } = userContext;
  useEffect(() => {}, [check]);

  const updateUserImage = (e) => {
    if (e.target.files.length !== 0) {
      let number = Math.floor(Math.random() * 100 + 1);
      const input = {
        id: user.id,
        name: user.name,
        image: `https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/image${number}${user.name}.jpg`,
      };

      const file = e.target.files[0];

      Storage.put(`image${number}${user.name}.jpg`, file, {
        contentType: 'image/png',
      })
        .then((result) => updateCurrentUser(input))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <CardMedia
        classes={mediaStyles}
        image={
          user?.image
            ? user.image
            : 'https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/white_wallpaper_5_4k_hd_white.jpg'
        }
      />
      <FloatingUploadButton
        style={cardStyles.floatLeft}
        uploadFunction={updateUserImage}
        labelId={'update-user-image'}
      />
    </>
  );
}

export default CardImage;
