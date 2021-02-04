import React, { useContext, useEffect } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import GroupCardImage from './GroupCardImage';

import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { GroupContext } from '../../../context/group/GroupState';
import GroupCardContent from './GroupCardContent';
import GroupPeopleCard from './GroupPeopleCard';
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 900,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
}));

export const GroupCardBody = React.memo(function EngagementCard() {
  const groupContext = useContext(GroupContext);
  const { group, clearGroup } = groupContext;
  const cardStyles = useStyles();
  const fadeShadowStyles = useFadedShadowStyles();
  useEffect(() => {
    return () => {
      clearGroup();
    };
  }, []);
  return (
    <Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
      <GroupCardImage />
      <GroupCardContent />
      <GroupPeopleCard />
    </Card>
  );
});

export default GroupCardBody;
