import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { GroupContext } from '../../../context/group/GroupState';

const useStyles = makeStyles(() => ({
  content: {
    padding: 24,
  },
}));

export const GroupCardContent = React.memo(function EngagementCard() {
  const groupContext = useContext(GroupContext);
  const { group } = groupContext;
  const cardStyles = useStyles();

  const textCardContentStyles = useN01TextInfoContentStyles();
  useEffect(() => {}, [group]);
  return (
    <CardContent className={cardStyles.content}>
      <TextInfoContent
        classes={textCardContentStyles}
        heading={group?.name}
        body={group?.description}
      />
    </CardContent>
  );
});

export default GroupCardContent;
