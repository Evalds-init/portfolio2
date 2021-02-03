import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FloatingUploadButton from '../../../utils/FloatingUploadButton';
import { ChannelContext } from '../../../context/group/ChannelState';
import { Storage } from 'aws-amplify';
import CardMedia from '@material-ui/core/CardMedia';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';

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

export const CardWallpaper = React.memo(function EngagementCard() {
  const channelContext = useContext(ChannelContext);
  const { group } = channelContext;
  const cardStyles = useStyles();
  const wideCardMediaStyles = useWideCardMediaStyles();
  const uploadGroupWallpaper = (e) => {
    if (e.target.files.length !== 0) {
      let number = Math.floor(Math.random() * 10000 + 1);
      const input = {
        id: group.id,
        media: `https://portfolio2a1536c1a34d0480ca9c02a490b55f672123209-dev.s3-eu-west-1.amazonaws.com/public/group${number}${group.name}.jpg`,
      };

      const file = e.target.files[0];

      Storage.put(`group${number}${group.name}.jpg`, file, {
        contentType: 'image/png',
      })
        .then((result) => updateCurrentUser(input))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <CardMedia classes={wideCardMediaStyles} image={group?.image} />{' '}
      <FloatingUploadButton
        style={cardStyles.floatLeft}
        uploadFunction={uploadGroupWallpaper}
        labelId={'update-group-wallpaper'}
      />
    </>
  );
});

export default CardWallpaper;
