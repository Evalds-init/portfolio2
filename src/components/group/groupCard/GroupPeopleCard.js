import React, { useContext, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import { GroupContext } from '../../../context/group/GroupState';
import { AlertContext } from '../../../context/alert/AlertState';
import { UserContext } from '../../../context/user/UserState';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles(() => ({
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
const GroupPeopleCard = ({ setIsMember = (f) => f, isMember, isOwner }) => {
  const groupContext = useContext(GroupContext);
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const peopleCardStyles = useStyles();

  const {
    group,
    updateSingleGroup,
    joinGroup,
    getGroupMembers,
    groupMembers,
  } = groupContext;
  const { setAlert } = alertContext;
  const { user } = userContext;
  const [groupForm, setGroupForm] = useState({
    name: '',
    description: '',
  });
  useEffect(() => {
    group?.members?.items && getGroupMembers(group.members.items.slice(0, 5));
  }, [group]);

  const { name, description } = setGroupForm;
  const submitForm = async (e) => {
    e.preventDefault();
    const input = {
      name,
      description,
    };
    if (name === '') {
      setAlert('Group name is required', 'error');
      setAlert('Group description can not be empty', 'error');
    } else {
      updateSingleGroup(input);
      setGroupForm({ name: '', description: '' });
    }
  };
  const onChange = (e) => {
    setGroupForm({ ...groupForm, [e.target.name]: e.target.value });
  };
  const handleJoinGroup = () => {
    const input = {
      groupID: group.id,
      memberID: user.name,
    };
    setIsMember(true);
    joinGroup(input);
  };

  return (
    <>
      <CardActions px={2} pb={3} mt={-1} className={peopleCardStyles.content}>
        <Box px={4} pb={1}>
          <AvatarGroup max={5}>
            {groupMembers?.map((member, index) => (
              <Avatar
                src={member.userAvatar}
                alt={member.name.toUpperCase()}
                key={index}
              />
            ))}
          </AvatarGroup>
        </Box>
        <div className={peopleCardStyles.actions}>
          {isMember === false && isOwner === false && (
            <IconButton onClick={handleJoinGroup}>
              <GroupAddIcon />
            </IconButton>
          )}
        </div>
      </CardActions>
    </>
  );
};

export default GroupPeopleCard;
