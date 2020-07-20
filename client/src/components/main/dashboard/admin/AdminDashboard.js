import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AdminPages from './AdminPages';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

export default function AdminDashboard() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
     
      <main className={classes.content}>
        <Container className={classes.container}>
          <Grid spacing={3}>
            <AdminPages/> 
          </Grid>
        </Container>
      </main>
    </div>
  );
}
