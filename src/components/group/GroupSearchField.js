import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation } from 'aws-amplify';
import { listGroups } from '../../graphql/queries';
import { GroupContext } from '../../context/group/GroupState';
import { UserContext } from '../../context/user/UserState';
import { useHistory } from 'react-router-dom';
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function GroupSearchField() {
  const userContext = useContext(UserContext);
  let history = useHistory();
  const { user } = userContext;
  const groupContext = useContext(GroupContext);
  const { getSingleGroup } = groupContext;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [groupName, setGroupName] = React.useState('');
  const [searchGroups, setSearchGroups] = React.useState([]);
  const loading = open && options.length === 0;
  const onChange = (e) => {
    if (e.target.value !== '') {
      setGroupName(e.target.value);
    } else {
      setGroupName('');
    }
  };
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const filter = {
        filter: { name: { contains: groupName } },
        limit: 5,
      };
      var groupList = await API.graphql(graphqlOperation(listGroups, filter));
      await sleep(1e3); // For demo purposes.
      const groups = await groupList.data.listGroups.items;
      setSearchGroups(groups);
      if (active) {
        setOptions(groups.map((group) => group.name));
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
  const getGroup = (e, value) => {
    if (!e || !value) {
      console.log('none');
    } else {
      const groupId = searchGroups.reduce(function (result, group) {
        group.name === value && result.push(group);
        return result;
      }, []);
      getSingleGroup(groupId[0].id);
      history.push('/groupinfo');
    }
  };
  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 280 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={getGroup}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={onChange}
          label="Search Groups"
          variant="outlined"
          style={{ width: '200px', marginLeft: '1.2rem' }}
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
