import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { GroupContext } from '../../context/group/GroupState';
import { UserContext } from '../../context/user/UserState';
import { useHistory } from 'react-router-dom';
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchField() {
  const userContext = useContext(UserContext);
  let history = useHistory();
  const { user } = userContext;
  const groupContext = useContext(GroupContext);
  const { getSingleProfile } = groupContext;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [name, setName] = React.useState(null);
  const loading = open && options.length === 0;
  const onChange = (e) => {
    if (e.target.value !== '') {
      setName(e.target.value);
    } else {
      setName(null);
    }
  };
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await API.graphql(
        graphqlOperation(listUsers, { input: name })
      );
      await sleep(1e3); // For demo purposes.
      let people = await response.data.listUsers.items;
      people = people.filter((friend) => friend.name !== user.name);
      if (active) {
        setOptions(people.map((human) => human.name));
      }
    })();

    return () => {
      active = false;
    };
    // eslint-disable-next-line
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const getProfile = (e, value) => {
    if (!e || !value) {
      console.log('none');
    } else {
      const isFriend = user.friends.items.filter(
        (friend) =>
          friend.name === value && friend.request !== 'invitationRejected'
      ).length;
      if (isFriend !== 0) {
        getSingleProfile(value);
        history.push('/friendprofile');
      } else if (isFriend === 0 || !isFriend) {
        getSingleProfile(value);
        history.push('/profile');
      } else {
        history.push('/');
      }
    }
  };
  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={getProfile}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={onChange}
          label="Search for friends"
          variant="outlined"
          style={{ width: '200px', marginLeft: '1.6rem' }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
