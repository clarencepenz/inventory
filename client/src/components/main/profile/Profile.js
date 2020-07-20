import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Container>
        <div style={{paddingLeft: '80px', paddingTop: '60px'}} className={classes.root}>
          <Avatar alt={localStorage.firstname} src="/static/images/avatar/1.jpg" className={classes.large} />
        </div>
         <h2 style={{paddingLeft: '110px', fontSize: '25px'}}>{localStorage.firstname}{'  '}{localStorage.lastname}</h2>
     </Container>
  );
}