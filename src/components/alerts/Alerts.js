import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { AlertContext } from '../../context/alert/AlertState';
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    color: '#fff',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerts() {
  const classes = useStyles();
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  useEffect(() => {}, [alertContext]);
  return (
    <div className={classes.root}>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert severity={alert.type} key={alert.id}>
            <AlertTitle>{alert.type}</AlertTitle>
            <strong>{alert.msg}</strong>
          </Alert>
        ))}
    </div>
  );
}
